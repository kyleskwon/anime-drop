jest.unmock('./animeCacheReducer')

import animeCacheReducer from './animeCacheReducer'

describe('anime cache adds anime to cache', () => {
  it('adds 1 + 2 to equal 3', () => {

    let state = {
      '456': {
        title: "bleach",
        id: "456"
      }
    };

    let action = {
      type: 'SET_ANIME_DETAILS',
      animeDetails: {
        title: "naruto",
        id: "123"
      }
    }

    let expectedState = {
      '123': {
        title: "naruto",
        id: "123"
      },
      '456': {
        title: "bleach",
        id: "456"
      }
    }

    expect(animeCacheReducer(state, action)).toEqual(expectedState);
  })
})
