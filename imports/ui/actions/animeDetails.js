import AL from '../../api/anilist'
import { getAccessToken } from './accessToken'

export const setAnimeDetails = (animeDetails) => ({
  type: 'SET_ANIME_DETAILS',
  animeDetails,
})

export function getAnimeDetails(id) {
  return (dispatch, getState) => {
    const token = getState().config.token
    if (token) {
      return getAnimeDetailsAPI(id, token)
    }

    return dispatch(getAccessToken())
      .then(newToken => getAnimeDetails(id, newToken))

    function getAnimeDetailsAPI(animeId, apiToken) {
      return AL.getAnimeDetails(animeId, apiToken)
        .then(details => dispatch(setAnimeDetails(details)))
        .catch(err => console.error(err))
    }
  }
}
