jest.unmock('./animeCache')

import animeCache from './animeCache'

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

    expect(animeCache(state, action)).toEqual(expectedState);
  })

  it('Returns default state on random action', () => {

    let state = {
      '456': {
        title: "bleach",
        id: "456"
      }
    };

    let action = {
      type: 'RANDOM_ACTION',
      foo: 'bar'
    }

    let expectedState = {
      '456': {
        title: "bleach",
        id: "456"
      }
    }

    expect(animeCache(state, action)).toEqual(expectedState);
  })
})
