jest.unmock('./animeDetails')

import { setAnimeDetails } from './animeDetails'

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
})
