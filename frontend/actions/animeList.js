// @flow
import AL from '../api/anilist'
import { serverError } from './errors'
import { getAccessToken } from './accessToken'

export const loadingSeasonPending = () => ({
  type: 'LOADING_SEASON_PENDING'
})

export const loadingSeasonComplete = () => ({
  type: 'LOADING_SEASON_COMPLETE'
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
      dispatch(getAccessToken())
        .then(newToken => getAnimeSeason({year, season}, newToken.access_token))

    function getAnimeSeason({year: number, season: string}, accessToken: string) {
      dispatch(loadingSeasonPending())
      return AL.getAnimeSeason({year, season}, accessToken)
         .then(data => {
           dispatch(setSeason({year, season}, data))
           dispatch(loadingSeasonComplete())
         })
         .catch(err => dispatch(serverError(err)))
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
      getAnimeYear(year, token.access_token)
    else
      dispatch(getAccessToken())
        .then(newToken => getAnimeYear(year, newToken.access_token))

    function getAnimeYear(year: number, accessToken: string) {
      dispatch(loadingSeasonPending())
      return AL.getAnimeYear(year, accessToken)
         .then(data => {
           dispatch(setYear(year, data))
           dispatch(loadingSeasonComplete())
         })
         .catch(err => dispatch(serverError(err)))
    }
  }
}

export function setSeason({year, season}, animes: Array<Object>) {
  return {
    type: 'SET_SEASON',
    payload: {
      year,
      season,
      animes
    }
  }
}

export function setYear(year, animes: Array<Object>) {
  return {
    type: 'SET_YEAR',
    payload: {
      year,
      animes
    }
  }
}
