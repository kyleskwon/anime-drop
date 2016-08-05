// @flow
import AL from '../api/anilist'

type token = {
  "access_token": string,
  "token_type": string,
  "expires": number,
  "expires_in": number
}

export const setAccessToken = (token: token) => ({
  type: 'SET_ACCESS_TOKEN',
  token,
})

export const getAccessToken = () => (
  (dispatch: Function) => (
    AL.getAPIToken()
      .then(token => {
        dispatch(setAccessToken(token))
        return token
      })
  )
)
