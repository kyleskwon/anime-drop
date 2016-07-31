import { callMethodPromise } from '../../helpers/helperPromises';

import { Meteor } from 'meteor/meteor';
import AL from '../../api/anilist';

export const serverError = (error) => ({
  type: 'SERVER_ERROR',
  error
})


export function getAPIToken(){
  return dispatch => {
    AL.getAPIToken()
      .then(res => dispatch(setAPIToken(res.data.access_token)))
      .catch(err => dispatch(serverError(err)));
  }
}

export function getLatestSeason(){
  return dispatch => {
    AL.getAPIToken()
      .then(token => {
        return AL.getAnimeSeason(2016, 'summer', token)
                 .then(res => dispatch(setLatestSeason(res.data)))
                 .catch(err => dispatch(serverError(err)));
      })
  }
}

export function setLatestSeason(animes){
  return {
    type: 'SET_LATEST_SEASON',
    animes
  }
}

export function setAPIToken(accessToken){
  return {
    type: 'SET_ACCESS_TOKEN',
    accessToken,
  }
}

export function createTodo(text){
  return dispatch => {
    callMethodPromise('addTodo', text)
      .then(data=> dispatch(getAllTodos()))
      .catch(err=> dispatch(serverError(err)))
  };
};

export function setTodos(todos){
  return {
    type: 'SET_TODOS',
    todos
  }
}

export function getAllTodos(){
  return dispatch => {
    callMethodPromise('getAllTodos')
      .then(todos=> dispatch(setTodos(todos)))
      .catch(error=>{
        dispatch({
          type: 'SERVER_ERROR',
          error
        });
      })
  }
}
