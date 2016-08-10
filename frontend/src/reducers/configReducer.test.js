jest.unmock('./configReducer'); // unmock to use the actual implementation of sum

import configReducer from './configReducer';

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

    expect(configReducer(state, action)).toEqual(expectedState);
  });
});
