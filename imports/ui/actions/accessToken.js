// @flow
import AL from '../../api/anilist'

export const setAccessToken = (token: string) => ({
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
