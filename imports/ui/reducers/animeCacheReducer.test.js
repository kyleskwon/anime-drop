// "use strict";
jest.unmock('./animeCacheReducer'); // unmock to use the actual implementation of sum

// import animeCacheReducer from './animeCacheReducer';
import animeCacheReducer from './animeCacheReducer';
// let animeCacheReducer = (state, action) => {
//   let newState = {}
//   console.log(action)
//   newState[action.animeDetails.id] = action.animeDetails;
//   return newState
// }

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
