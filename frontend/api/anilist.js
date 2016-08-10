// @flow
import 'whatwg-fetch'

const client_id = 'tyranel-wi4tj'
const client_secret = 'D1HM7LWb9tseYL1f45dsTuNQ'
const headers = {
  'Content-Type': 'application/json'
}

type ALtype = {
  urls: {
    root: string,
    browse: string,
    accessToken: string,
    anime: string,
    genreList: string
  },
  getAnimeSeason: Function,
  getAPIToken: Function,
  getAnimeDetails: Function,
  getAnimeDetailsSmall: Function,
  getGenres: Function
}

const AL: ALtype = {
  urls: {
    root: 'http://anilist.co/api/',
    browse: 'browse/anime',
    accessToken: 'auth/access_token',
    anime: 'anime/',
    genreList: 'genre_list'
  },
  getAnimeSeason(year: number, season: string, token: string): Promise<*>{
    let options = {
      method: 'GET',
      headers,
    }

    let url: string = `${this.urls.root}${this.urls.browse}?year=${year}&season=${season}&access_token=${token}&full_age=full_page=true`;

    return fetch(url, options)
             .then(res => res.json())
             .then(data => data.map((anime) => ({
               ...anime,
               average_score: parseInt(anime.average_score, 10)/10
             })))
  },
  getAPIToken(): Promise<*> {
    let options = {
      method: 'POST',
      headers,
      body: JSON.stringify({
        "grant_type": 'client_credentials',
        client_id,
        client_secret
      })
    }

    let url = `${this.urls.root}${this.urls.accessToken}`;
    return fetch(url, options).then(res => res.json())
  },
  getAnimeDetails(animeId: string, token: string): Promise<*>{
    let options = {
      method: 'GET',
      headers
    }
    let url = `${this.urls.root}${this.urls.anime}${animeId}/page?&access_token=${token}`;
    return fetch(url, options).then(res => res.json())
  },
  getAnimeDetailsSmall(animeId: string, token: string): Promise<*>{
    let options = {
      method: 'GET',
      headers
    }
    let url = `${this.urls.root}${this.urls.anime}${animeId}?&access_token=${token}`;
    return fetch(url, options).then(res => res.json())
  },
  getGenres(token: string): Promise<*>{
    let options = {
      method: 'GET',
      headers
    }
    let url = `${this.urls.root}${this.urls.genreList}&access_token=${token}`;
    return fetch(url, options).then(res => res.json())
  }

}

export default AL;