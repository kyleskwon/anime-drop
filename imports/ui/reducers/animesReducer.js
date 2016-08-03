// @flow
function reducer(state: Array<Object> = [], action: Object = {}){
  switch(action.type) {
    case 'SET_LATEST_SEASON':
      return action.animes
    default:
      return state
  }
}

export default reducer
