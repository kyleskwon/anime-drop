//@flow
type action = {
  type?: string,
  error?: Object
}

function serverErrorReducer(state: Object = {}, action: action = {}){
  switch(action.type) {
    case 'SERVER_ERROR':
      return {
        error: action.error
      }
    case 'CLEAR_ERROR':
      return {}
    default:
      return state;
  }
}

export default serverErrorReducer;
