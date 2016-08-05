// @flow
function reducer(state: Object = {}, action: Object = {}){
  switch(action.type) {
    case 'SET_SEASON':
      let { animes, year, season } = action.payload
      let newSeason = { animes }
      let newState = { ...state }
      newState[`${year}-${season}`] = animes

      return newState
    default:
      return state
  }
}

export default reducer
