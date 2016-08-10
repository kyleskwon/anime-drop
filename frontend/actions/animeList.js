// @flow
import AL from '../api/anilist'
import { serverError } from './errors'
import { getAccessToken } from './accessToken'

const loadingSeasonPending = () => ({
  type: 'LOADING_SEASON_PENDING'
})

const loadingSeasonComplete = () => ({
  type: 'LOADING_SEASON_COMPLETE'
})

export function getSeason(year: number, season: string) {
  return (dispatch: Function, getState: Function) => {
    const state = getState(),
          token = state.config.token,
          cache = state.seasons[year + "-" + season]

    console.log('cache', cache)

    if (cache)
      return false

    if (token)
      getAnimeSeason(year, season, token.access_token)
    else
      dispatch(getAccessToken())
        .then(newToken => getAnimeSeason(year, season, newToken.access_token))

    function getAnimeSeason(year: number, season: string, accessToken: string) {
      dispatch(loadingSeasonPending())
      return AL.getAnimeSeason(year, season, accessToken)
         .then(data => {
           dispatch(setSeason(year, season, data))
           dispatch(loadingSeasonComplete())
         })
         .catch(err => dispatch(serverError(err)))
    }
  }
}

export function setSeason(year: number, season: string, animes: Array<Object>) {
  return {
    type: 'SET_SEASON',
    payload: {
      year,
      season,
      animes
    }
  }
}
