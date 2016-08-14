jest.unmock('./errors')

import { serverError } from './errors'

describe('Errors action creators', () => {
  it('returns server error action', () => {
    let error = {
      message: "Not enough pokemon",
      number: 555
    }

    let expectedState = {
      type: 'SERVER_ERROR',
      error: {
        message: "Not enough pokemon",
        number: 555
      }
    }
    expect(serverError(error)).toEqual(expectedState);
  })

})
