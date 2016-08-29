// @flow
import { combineReducers } from 'redux';
import serverError from '../reducers/serverError';
import config from '../reducers/config';
import seasons from '../reducers/seasons';
import animeCache from '../reducers/animeCache';
import animeListOptions from '../reducers/animeListOptions';
import genres from '../reducers/genres';
import { routeParamsReducer } from 'react-router-redux-params';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  serverError,
  config,
  seasons,
  animeCache,
  animeListOptions,
  genres,
  routing: routeParamsReducer,
  form: formReducer
})

export default rootReducer;
