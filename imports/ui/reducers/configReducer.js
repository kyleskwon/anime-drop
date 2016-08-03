// @flow
type config = {
  token: ?string
}
const initialState = {
  token: null
}

function reducer(state: config = initialState, action: Object = {}){
  switch(action.type) {
    case 'SET_ACCESS_TOKEN':
      return {
        token: action.token
      }
    default:
      return state;
  }
}

export default reducer;
