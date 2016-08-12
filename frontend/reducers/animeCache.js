// @flow
type action = {
  type: string,
  [key: string]: any
}

function reducer(state: Object = {}, action: action){
  switch(action.type) {
    case 'SET_ANIME_DETAILS':
      return {
        ...state,
        [action.animeDetails.id]: action.animeDetails
      };
    default:
      return state;
  }
}

export default reducer;
