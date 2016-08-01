import AL from '../../api/anilist';

export const setAccessToken = token => ({
  type: "SET_ACCESS_TOKEN",
  token
})

export const getAccessToken = () => {
  return dispatch => {
    return AL.getAPIToken()
      .then(token => {
        dispatch(setAccessToken(token));
        return token;
      })
  }
}
