// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { getAnimeList  } from '../../actions/animeList'
import AnimeList from './AnimeList'

class AnimeListContainer extends Component {
  props: {
    getAnimeList: Function,
    animes: Object,
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
    } else if (year && this.seasonInCache(animes, year)) {
      getAnimeList(year)
    }

  }

  componentWillMount(){
    this.loadAnime()
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
      year
    } = this.props
    let animeList;

    if(season && year) {
      animeList = animes[year + '-' + season]
    } else if(year) {
      animeList = animes[year]
    }

    return (
      <div className="home">
        <ul className="anime-container">
          <AnimeList animes={animeList} />
        </ul>
      </div>
    )
  }
}

export default connect(({ config }) => ({ config }), { getAnimeList })(AnimeListContainer)
