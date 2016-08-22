// @flow

const initialState = []

function genresReducer(state: Array<string> = initialState, action: Object = {}){
  switch(action.type) {
    case 'RECEIVE_GENRES':
      return action.genres
    default:
      return state;
  }
}

export default genresReducer;
