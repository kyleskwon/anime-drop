// @flow
type seasons = {
  loading: Array<string>
}

function reducer(state: seasons = { loading: [] }, action: Object = {}){
  switch(action.type) {
    case 'SET_SEASON':
      return {
        ...state,
        [`${action.year}-${action.season}`]: action.animes
      }
    case 'FETCH_ANIMELIST_REQUEST':
      return {
        ...state,
        loading: [...state.loading, `${action.year}-${action.season}`]
      }
    case 'FETCH_ANIMELIST_COMPLETE':
      return {
        ...state,
        loading: state.loading.filter(season => season !== `${action.year}-${action.season}`)
      }
    default:
      return state
  }
}

export default reducer
