// @flow
type config = {
  token: ?string
}

const initialState = {
  token: null,
  currentSeason: {
    year: 2016,
    season: 'summer'
  }
}

function reducer(state: config = initialState, action: Object = {}){
  switch(action.type) {
    case 'SET_ACCESS_TOKEN':
      return {
        ...state,
        token: action.token
      }
    default:
      return state;
  }
}

export default reducer;
