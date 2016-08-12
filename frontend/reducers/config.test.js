jest.unmock('./config'); // unmock to use the actual implementation of sum

import config from './config';

describe('config Reducer', () => {
  it('adds an api token', () => {

    let state = {}

    let action = {
      type: 'SET_ACCESS_TOKEN',
      token: {
        "access_token": "cTMH8e0iGMPZyMZqaJfAy7UMYjMUocWJ5Ef5nprZ",
        "token_type": "bearer",
        "expires": 1470303272,
        "expires_in": 3600
      }
    }

    let expectedState = {
      token: {
        "access_token": "cTMH8e0iGMPZyMZqaJfAy7UMYjMUocWJ5Ef5nprZ",
        "token_type": "bearer",
        "expires": 1470303272,
        "expires_in": 3600
      }
    };

    expect(config(state, action)).toEqual(expectedState);
  });

  it('has initial state', () => {

    let state = {
      token: null,
      currentSeason: {
        year: 2016,
        season: 'summer'
      }
    }

    let action = {
      type: 'ADD_ANIMELIST_FILTER'
    }

    let expectedState = {
      token: null,
      currentSeason: {
        year: 2016,
        season: 'summer'
      }
    };

    expect(config(state, action)).toEqual(expectedState);
  });
});
