// @flow
import { combineReducers } from 'redux';
import serverError from './serverErrorReducer';
import config from './configReducer';
import seasons from './seasonsReducer';
import animeCache from './animeCacheReducer';
import { routerReducer } from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  serverError,
  config,
  seasons,
  animeCache,
  routing: routerReducer,
  form: formReducer
})

export default rootReducer;
