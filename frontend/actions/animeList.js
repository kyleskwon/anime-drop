// @flow
import AL from '../api/anilist'
import { serverError } from './errors'
import { getAccessToken } from './accessToken'

const fetchAnimeListRequest = () => ({
  type: 'FETCH_ANIMELIST_REQUEST'
})

const fetchAnimeListComplete = () => ({
  type: 'FETCH_ANIMELIST_COMPLETE'
})

const fetchAnimeListFailure = () => ({
  type: 'FETCH_ANIMELIST_FAILURE'
})

const setSeason = ({year, season}: {year: number, season: string}, animes: Array<Object>) => ({
  type: 'SET_SEASON',
  payload: {
    year,
    season,
    animes
  }
})

const setYear = (year: number, animes: Array<Object>) => ({
  type: 'SET_YEAR',
  payload: {
    year,
    animes
  }
})

export function getSeason(year: number, season: string) {
  return (dispatch: Function, getState: Function) => {
    const state = getState(),
          token = state.config.token,
          cache = state.seasons[year + "-" + season]

    if (cache)
      return false

    if (token)
      return getAnimeSeason({year, season}, token.access_token)
    else
      return dispatch(getAccessToken())
        .then(newToken => getAnimeSeason({year, season}, newToken.access_token))

    function getAnimeSeason({year: number, season: string}, accessToken: string) {
      dispatch(fetchAnimeListRequest())
      return AL.getAnimeSeason({year, season}, accessToken)
         .then(data => {
           dispatch(setSeason({year, season}, data))
           dispatch(fetchAnimeListComplete())
         })
         .catch(err => {
           dispatch(serverError(err))
           dispatch(fetchAnimeListFailure())
         })
    }
  }
}

export function getYear(year: number) {
  return (dispatch: Function, getState: Function) => {
    const state = getState(),
          token = state.config.token,
          cache = state.years[year]

    if (cache)
      return false

    if (token)
      return getAnimeYear(year, token.access_token)
    else
      return dispatch(getAccessToken())
        .then(newToken => getAnimeYear(year, newToken.access_token))

    function getAnimeYear(year: number, accessToken: string) {
      dispatch(fetchAnimeListRequest())
      return AL.getAnimeYear(year, accessToken)
         .then(data => {
           dispatch(setYear(year, data))
           dispatch(fetchAnimeListComplete())
         })
         .catch(err => {
           dispatch(serverError(err))
           dispatch(fetchAnimeListFailure())
         })
    }
  }
}
