import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

import { setAnimeDetails, getAnimeDetails } from './animeDetails'

describe('Anime Details action creators', () => {
  it('returns loading set Anime details action', () => {
    let animeDetails = {
      name: 'naruto'
    }
    let expectedState = {
      type: "SET_ANIME_DETAILS",
      animeDetails: {
        name: 'naruto'
      }
    }
    expect(setAnimeDetails(animeDetails)).toEqual(expectedState);
  })

  it('dispatches the correct actions on successful fetch request', () => {

    fetch.mockResponse(JSON.stringify({ name: 'naruto' }))

    const expectedActions = [
      { type: 'SET_ANIME_DETAILS', animeDetails: { name: 'naruto'}}
    ]
    const store = mockStore({ config: { token: { access_token: 'wtw45CmyEuh4P621IDVxWkgVr5QwTg3wXEc4Z7Cv' }}})

    return store.dispatch(getAnimeDetails("21049"))
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  });

  it('dispatches requests for an access token before requesting for animeDetails', () => {

    fetch.mockResponseOnce(JSON.stringify({access_token: '12345' }))
    fetch.mockResponseOnce(JSON.stringify({ name: 'naruto'}))

    const expectedActions = [
      { type: 'SET_ACCESS_TOKEN', token: {access_token: '12345'}},
      { type: 'SET_ANIME_DETAILS', animeDetails: { name: 'naruto'}}
    ]
    const store = mockStore({ config: { token: null }})

    return store.dispatch(getAnimeDetails("21049"))
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  });
})
