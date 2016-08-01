const initialState = {
  token: null,
}

function reducer(state = initialState, action = {}){
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
