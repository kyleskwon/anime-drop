// @flow
type action = {
  type: string,
  sort?: string,
  filter?: Array<string>
}

function reducer(state: Object = { sort: { type: 'score', order: 'desc'}, filters: []}, action: action){
  switch(action.type) {
    case 'SET_ANIMELIST_SORT':
      return {
        ...state,
        sort: action.sort
      }
    case 'ADD_ANIMELIST_FILTER':
      if(state.filters.includes(action.filter))
        return state

      return {
        ...state,
        filters: [...state.filters, action.filter]
      };
    case 'REMOVE_ANIMELIST_FILTER':
      return {
        ...state,
        filters: state.filters.filter(filter => filter !== action.filter)
      };
    default:
      return state;
  }
}

export default reducer;
