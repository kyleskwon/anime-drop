// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { getAnimeList, getGenres } from '../../actions/animeList'
import AnimeList from './AnimeList'

class AnimeListContainer extends Component {
  props: {
    getAnimeList: Function,
    getGenres: Function,
    animes: Object,
    genres: Array<Object>,
    year: number,
    season: string,
    params: Object,
    config: Object
  }

  seasonInCache(cache: ?Object, year: number, season: ?string) {
    if(!cache)
      return false

    if(season) {
      return !cache[year + '-' + season]
    } else {
      return !cache[year]
    }
  }

  loadAnime(newProps: ?Object, oldProps: ?Object){
    let props = newProps || this.props
    const {
      getAnimeList,
      animes,
      year,
      season,
      config: { currentSeason }
    } = props

    if(season && this.seasonInCache(animes, year, season)) {
      getAnimeList(year, season)
    } else if (year && !season && this.seasonInCache(animes, year)) {
      getAnimeList(year)
    }

  }

  loadGenres() {
    if(this.props.genres.length < 1) {
      this.props.getGenres()
    }
  }

  componentWillMount(){
    this.loadAnime()
    this.loadGenres()
  }

  componentWillReceiveProps(nextProps: Object) {
    if(
      this.props.animes.loading !== nextProps.animes.loading ||
      this.props.config.token !== nextProps.config.token
    ){
      return
    }
    if(!this.props.animes.loading){
      this.loadAnime(nextProps)
    }
  }

  formatScore (averageScore: number) {
    return averageScore === 0 ? "" : averageScore
  }

  render(){
    const {
      animes,
      config: { currentSeason },
      season,
      year,
      genres
    } = this.props
    let animeList;

    if(season && year) {
      animeList = animes[year + '-' + season]
    } else if(year) {
      animeList = animes[year]
    }

    return (
      <div className="home">
        <ul className="genres">
          {genres.map(genre => <li key={genre.id}>{genre.genre}</li>)}
        </ul>
        <ul className="anime-container">
          <AnimeList animes={animeList} />
        </ul>
      </div>
    )
  }
}

export default connect(({ config, genres }) => ({ config, genres }), { getAnimeList, getGenres })(AnimeListContainer)
