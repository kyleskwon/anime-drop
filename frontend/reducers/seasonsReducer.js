// @flow
function reducer(state: Object = {}, action: Object = {}){
  switch(action.type) {
    case 'SET_SEASON':
      let { animes, year, season } = action.payload
      let newState = { ...state }
      newState[`${year}-${season}`] = animes
      return newState
    case 'LOADING_SEASON_PENDING':
      return {
        ...state,
        loading: true
      }
    case 'LOADING_SEASON_COMPLETE':
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}

export default reducer
