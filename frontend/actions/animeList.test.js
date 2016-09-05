import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

import { getSeason, getYear } from './animeList'

describe('Anime list async action creators', () => {
  it('dispatches the correct actions on successful getSeason fetch request', () => {

    fetch.mockResponse(JSON.stringify([
      {name: 'naruto', average_score: 79},
      {name: 'bleach', average_score: 98}
    ]))

    const expectedActions = [
      {
        type: 'FETCH_ANIMELIST_REQUEST',
        year: 2016,
        season: 'summer'
      },
      {
        type: 'SET_SEASON',
        animes: [
          {name: 'naruto', average_score: 7.9},
          {name: 'bleach', average_score: 9.8}
        ],
        year: 2016,
        season: 'summer'
      },
      {
        type: 'FETCH_ANIMELIST_COMPLETE',
        year: 2016,
        season: 'summer'
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
