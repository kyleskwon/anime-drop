function reducer(state = {}, action = {}){
  switch(action.type) {
    case 'SET_ANIME_DETAILS':
      let newState = {
        ...state.anime
      };
      newState[action.animeDetails.id] = action.animeDetails;
      return newState;
    default:
      return state;
  }
}

export default reducer;
