jest.unmock('./animeList')

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

import { loadingSeasonPending, loadingSeasonComplete, getSeason } from './animeList'

describe('Anime list action creators', () => {
  it('returns loading pending action', () => {
    expect(loadingSeasonPending()).toEqual({type: "LOADING_SEASON_PENDING"});
  })

  it('returns loading complete action', () => {
    expect(loadingSeasonComplete()).toEqual({type: "LOADING_SEASON_COMPLETE"});
  })

})

describe('Anime list async action creators', () => {
  it('dispatches the correct actions on successful getSeason fetch request', () => {
    afterEach(() => {
      nock.cleanAll()
    })

    nock('https://anilist.co/api')
      .get('/browse/anime')
      .query({
        year: 2016,
        season: 'summer',
        access_token: 'wtw45CmyEuh4P621IDVxWkgVr5QwTg3wXEc4Z7Cv',
        full_page: true
      })
      .reply(200, [{name: 'naruto', average_score: 79}, {name: 'bleach', average_score: 98}])

    const expectedActions = [
      {
        type: 'LOADING_SEASON_PENDING'
      },
      {
        type: 'SET_SEASON',
        payload: {
          animes: [{name: 'naruto', average_score: 7.9}, {name: 'bleach', average_score: 9.8}],
          year: 2016,
          season: 'summer'
        }
      },
      {
        type: 'LOADING_SEASON_COMPLETE'
      }
    ]
    const store = mockStore({
      config: { token: { access_token: 'wtw45CmyEuh4P621IDVxWkgVr5QwTg3wXEc4Z7Cv' }},
      seasons: []
    })

    return store.dispatch(getSeason(2016, 'summer'))
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  });
})
