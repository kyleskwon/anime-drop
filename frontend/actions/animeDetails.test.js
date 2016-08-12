jest.unmock('./animeDetails')

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'

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
    afterEach(() => {
      nock.cleanAll()
    })

    nock('https://anilist.co')
      .get('/api/anime/21049/page')
      .query({
        access_token: 'wtw45CmyEuh4P621IDVxWkgVr5QwTg3wXEc4Z7Cv'
      })
      .reply(200, { name: 'naruto' })

    const expectedActions = [
      { type: 'SET_ANIME_DETAILS', animeDetails: { name: 'naruto'}}
    ]
    const store = mockStore({ config: { token: { access_token: 'wtw45CmyEuh4P621IDVxWkgVr5QwTg3wXEc4Z7Cv' }}})

    return store.dispatch(getAnimeDetails("21049"))
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  });
})
