import { callMethodPromise } from '../../helpers/helperPromises';
import { Meteor } from 'meteor/meteor';

import AL from '../../api/anilist';
import { serverError } from './errors';
import { getAccessToken } from './accessToken';

export function getLatestSeason(){
  return (dispatch, getState) => {
    let token = getState().config.token;
    if(token){
      getAnimeSeason(2016, 'summer', token)
    } else {
      dispatch(getAccessToken())
        .then(token => {
          return getAnimeSeason(2016, 'summer', token)
        })
    }

    function getAnimeSeason(year, season, token){
      return AL.getAnimeSeason(2016, 'summer', token)
         .then(res => dispatch(setLatestSeason(res.data)))
         .catch(err => dispatch(serverError(err)));
    }
  }
}

export function setLatestSeason(animes){
  return {
    type: 'SET_LATEST_SEASON',
    animes
  }
}
