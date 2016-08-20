import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

import { setAccessToken, getAccessToken } from './accessToken'

describe('Access token action creators', () => {
  it('returns loading set set Access token action', () => {
    let token = {
      access_token: '1234567890',
      expiry: '123456'
    }
    let expectedState = {
      type: "SET_ACCESS_TOKEN",
      token: {
        access_token: '1234567890',
        expiry: '123456'
      }
    }
    expect(setAccessToken(token)).toEqual(expectedState);
  })

  it('dispatches the correct actions on successful fetch request', () => {

    fetch.mockResponse(JSON.stringify({access_token: '12345' }))

    const expectedActions = [
      { type: 'SET_ACCESS_TOKEN', token: {access_token: '12345'}}
    ]
    const store = mockStore({ config: {token: "" } })

    store.dispatch(getAccessToken())
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })

  });

})
