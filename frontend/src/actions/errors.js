// @flow
export const serverError = (error: Object) => ({
  type: 'SERVER_ERROR',
  error
})
