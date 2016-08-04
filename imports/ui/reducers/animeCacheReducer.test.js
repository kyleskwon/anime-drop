jest.unmock('./animeCacheReducer'); // unmock to use the actual implementation of sum

import animeCacheReducer from './animeCacheReducer';

describe('anime cache adds anime to cache', () => {
  it('adds 1 + 2 to equal 3', () => {

    const state = {};

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
      }
    };

    expect(animeCacheReducer(state, action)).toEqual(expectedState);
  });
});
