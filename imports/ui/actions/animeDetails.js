import AL from '../../api/anilist';
import { setAccessToken, getAccessToken } from './accessToken';

const setAnimeDetails = (animeDetails) => ({
  type: "SET_ANIME_DETAILS",
  animeDetails
})

export function getAnimeDetails (id) {
  return (dispatch, getState) => {
    let token = getState().config.token;
    if(token) {
      return getAnimeDetails(id, token);
    } else {
      return dispatch(getAccessToken())
        .then(token => getAnimeDetails(id, token))
    }

    function getAnimeDetails(id, token){
      return AL.getAnimeDetails(id, token)
        .then(details => dispatch(setAnimeDetails(details)))
        .catch(err => console.error(err))
    }
  }
}
