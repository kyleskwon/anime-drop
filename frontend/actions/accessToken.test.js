jest.unmock('./accessToken')

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'

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
    afterEach(() => {
      nock.cleanAll()
    })

    nock('https://anilist.co/api/')
      .post('/auth/access_token', {
        grant_type : 'client_credentials',
        client_id: 'tyranel-wi4tj',
        client_secret: 'D1HM7LWb9tseYL1f45dsTuNQ'
      })
      .reply(200, {access_token: '12345' })

    const expectedActions = [
      { type: 'SET_ACCESS_TOKEN', token: {access_token: '12345'}}
    ]
    const store = mockStore({ config: {token: "" } })

    return store.dispatch(getAccessToken())
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  });
})
