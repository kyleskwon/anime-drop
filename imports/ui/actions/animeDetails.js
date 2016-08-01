import AL from '../../api/anilist';

const setAnimeDetails = (animeDetails) => ({
  type: "SET_ANIME_DETAILS",
  animeDetails
})

export function getAnimeDetails (id) {
  return dispatch => {
    AL.getAPIToken()
      .then(token => AL.getAnimeDetails(id, token))
      .then(details => dispatch(setAnimeDetails(details)))
  }
}
