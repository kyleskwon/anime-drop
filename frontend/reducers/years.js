// @flow
function reducer(state: Object = {}, action: Object = {}){
  switch(action.type) {
    case 'SET_YEAR':
      let { animes, year} = action.payload
      return {
        ...state,
        [year]: animes
      }
    case 'LOADING_YEAR_PENDING':
      return {
        ...state,
        loading: true
      }
    case 'LOADING_YEAR_COMPLETE':
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}

export default reducer
