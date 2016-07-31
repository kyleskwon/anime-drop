import { combineReducers } from 'redux';
import todos from './todosReducer';
import serverError from './serverErrorReducer';
import config from './configReducer';
import animes from './animeReducer';
import { routerReducer } from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  todos,
  serverError,
  config,
  animes,
  routing: routerReducer,
  form: formReducer
})

export default rootReducer;
