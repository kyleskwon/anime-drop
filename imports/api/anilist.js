import { httpPromise } from '../helpers/helperPromises';

const client_id = 'tyranel-wi4tj';
const client_secret = 'D1HM7LWb9tseYL1f45dsTuNQ';

const AL = {
  urls: {
    root: 'http://anilist.co/api/',
    browse: 'browse/anime',
    accessToken: 'auth/access_token'
  },
  getAnimeSeason(year, season, token){
    let options = {
      params: {
        year,
        season,
        full_page: "full_page=true",
        access_token: token
      }
    }

    let url = `${this.urls.root}${this.urls.browse}`;
    return httpPromise('GET', url, options)
  },
  getAPIToken(){
    let options = {
      data: {
        "grant_type": 'client_credentials',
        client_id,
        client_secret
      }
    }

    let url = `${this.urls.root}${this.urls.accessToken}`;
    return httpPromise('POST', url, options).then(res => res.data.access_token)
  },
  getAnimeDetails(animeId, token){
    let options = {
        params: {
          access_token: token
        }
    }
    let url = `${this.urls.root}anime/${animeId}`;
    return httpPromise('GET', url, options).then(res => res.data)
  }

}

export default AL;
