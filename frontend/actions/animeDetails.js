// @flow
import AL from '../api/anilist'
import { getAccessToken } from './accessToken'

type dispatch = (action: Object) => Object
type getState = () => Object

export const setAnimeDetails = (animeDetails: Object) => ({
  type: 'SET_ANIME_DETAILS',
  animeDetails,
})

export const getAnimeDetails = (id: string) => (dispatch: dispatch, getState: getState) => {
  const token = getState().config.token
  if (token) {
    return getAnimeDetailsAPI(id, token.access_token)
  }

  return dispatch(getAccessToken())
    .then(newToken => getAnimeDetailsAPI(id, newToken.access_token))

  function getAnimeDetailsAPI(animeId: string, apiToken: string) {
    console.log(apiToken)
    return AL.getAnimeDetails(animeId, apiToken)
      .then(details => dispatch(setAnimeDetails(details)))
      .catch(err => console.error(err))
  }
}
