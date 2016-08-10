// @flow
import { combineReducers } from 'redux';
import serverError from '../reducers/serverErrorReducer';
import config from '../reducers//configReducer';
import seasons from '../reducers//seasonsReducer';
import animeCache from '../reducers/animeCacheReducer';
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
