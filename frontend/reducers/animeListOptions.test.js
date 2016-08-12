jest.unmock('./animeListOptions')

import animeListOptions from './animeListOptions'

describe('animeListOptions Reducer', () => {
  it('adds filter to the animeListOptions Object', () => {

    let state = {
      filters: [],
      sort: {}
    };

    let action = {
      type: 'ADD_ANIMELIST_FILTER',
      filter: "action"
    }

    let expectedState = {
      filters: ['action'],
      sort: {}
    }

    expect(animeListOptions(state, action)).toEqual(expectedState);
  })

  it('removes filter to the animeListOptions Object', () => {

    let state = {
      filters: ['shounen'],
      sort: {}
    };

    let action = {
      type: 'REMOVE_ANIMELIST_FILTER',
      filter: 'shounen'
    }

    let expectedState = {
      filters: [],
      sort: {}
    }

    expect(animeListOptions(state, action)).toEqual(expectedState);
  })

  it('does not add duplicate filters', () => {

    let state = {
      filters: ['shounen'],
      sort: {}
    };

    let action = {
      type: 'ADD_ANIMELIST_FILTER',
      filter: 'shounen'
    }

    let expectedState = {
      filters: ['shounen'],
      sort: {}
    }

    expect(animeListOptions(state, action)).toEqual(expectedState);
  })

  it('adds sort object to animeListOptions', () => {

    let state = {
      filters: [],
      sort: {
        type: 'score',
        order: 'asc'
      }
    };

    let action = {
      type: 'SET_ANIMELIST_SORT',
      sort: {
        type: 'alphabetical',
        order: 'desc'
      }
    }

    let expectedState = {
      filters: [],
      sort: {
        type: 'alphabetical',
        order: 'desc'
      }
    }

    expect(animeListOptions(state, action)).toEqual(expectedState);
  })

  it('returns default state on random action', () => {

    let state = {
      filters: [],
      sort: {
        type: 'score',
        order: 'asc'
      }
    };

    let action = {
      type: 'RANDOM_ACTION',
      foo: 'bar'
    }

    let expectedState = {
      filters: [],
      sort: {
        type: 'score',
        order: 'asc'
      }
    }

    expect(animeListOptions(state, action)).toEqual(expectedState);
  })
})
