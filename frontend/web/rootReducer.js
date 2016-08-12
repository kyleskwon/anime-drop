// @flow
import { combineReducers } from 'redux';
import serverError from '../reducers/serverError';
import config from '../reducers/config';
import seasons from '../reducers/seasons';
import animeCache from '../reducers/animeCache';
import animeListOptions from '../reducers/animeListOptions';
import years from '../reducers/years';
import { routerReducer } from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  serverError,
  config,
  seasons,
  animeCache,
  animeListOptions,
  years,
  routing: routerReducer,
  form: formReducer
})

export default rootReducer;
