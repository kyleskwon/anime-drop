import AL from '../../api/anilist'
import { serverError } from './errors'
import { getAccessToken } from './accessToken'

export function getSeason(year, season) {
  return (dispatch, getState) => {
    const token = getState().config.token

    if (token)
      getAnimeSeason(year, season, token.access_token)
    else
      dispatch(getAccessToken())
        .then(newToken => getAnimeSeason(year, season, newToken.access_token))

    function getAnimeSeason(year: number, season: string, accessToken: string) {
      return AL.getAnimeSeason(year, season, accessToken)
         .then(data => dispatch(setSeason(year, season, data)))
         .catch(err => dispatch(serverError(err)))
    }
  }
}

export function setSeason(year: number, season: string, animes: Array) {
  return {
    type: 'SET_SEASON',
    payload: {
      year,
      season,
      animes
    }
  }
}
