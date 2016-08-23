// @flow
type config = {
  token: ?string
}

const initialState = () => {
  let now = new Date(),
      year = now.getFullYear(),
      month = now.getMonth(),
      season;

  switch(true){
    case month >= 0:
      season = 'winter'
    case month >= 3:
      season = 'spring'
    case month >= 6:
      season = 'summer'
    case month >= 9:
      season = 'autumn'
  }

  return {
    token: null,
    currentSeason: {
      year,
      season
    }
  }
}

function reducer(state: config = initialState(), action: Object = {}){
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
