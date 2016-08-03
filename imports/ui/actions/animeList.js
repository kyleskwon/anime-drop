import AL from '../../api/anilist'
import { serverError } from './errors'
import { getAccessToken } from './accessToken'

export function getLatestSeason() {
  return (dispatch, getState) => {
    const token = getState().config.token
    if (token) {
      getAnimeSeason(2016, 'summer', token)
    } else {
      dispatch(getAccessToken())
        .then(newToken => getAnimeSeason(2016, 'summer', newToken))
    }

    function getAnimeSeason(year: number, season: string, accessToken: string) {
      return AL.getAnimeSeason(year, season, accessToken)
         .then(data => dispatch(setLatestSeason(data)))
         .catch(err => dispatch(serverError(err)))
    }
  }
}

export function setLatestSeason(animes: Array) {
  return {
    type: 'SET_LATEST_SEASON',
    animes,
  }
}
