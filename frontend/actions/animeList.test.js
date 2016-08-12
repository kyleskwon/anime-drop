jest.unmock('./animeList')

import { loadingSeasonPending, loadingSeasonComplete } from './animeList'

describe('Anime list action creators', () => {
  it('returns loading pending action', () => {
    expect(loadingSeasonPending()).toEqual({type: "LOADING_SEASON_PENDING"});
  })

  it('returns loading complete action', () => {
    expect(loadingSeasonComplete()).toEqual({type: "LOADING_SEASON_COMPLETE"});
  })
})
