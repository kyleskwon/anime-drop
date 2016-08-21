// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { getSeason  } from '../../actions/animeList'
import AnimeList from './pages/AnimeList'

class AnimeBySeason extends Component {
  props: {
    seasons: Object,
    getSeason: Function,
    params: Object,
    config: Object
  }

  loadAnime(newProps, oldProps){
    let props = newProps || this.props
    const {
      getSeason,
      seasons,
      params: { year, season },
      config: { currentSeason }
    } = props

    if(year && season && !seasons[year + '-' + season]) {
      getSeason(year, season)
    } else if(Object.keys(seasons).length === 0){
      getSeason(currentSeason.year, currentSeason.season)
    }


  }

  componentWillMount(){
    this.loadAnime()
  }

  componentWillReceiveProps(nextProps) {
    if(
      this.props.seasons.loading !== nextProps.seasons.loading ||
      this.props.config.token !== nextProps.config.token
    ){
      return
    }
    if(!this.props.seasons.loading){
      this.loadAnime(nextProps)
    }
  }

  formatScore (averageScore: number) {
    return averageScore === 0 ? "" : averageScore
  }

  render(){
    const {
      seasons,
      params: { year, season },
      config: { currentSeason }
    } = this.props
    let thisSeason,
        animeList

    if(year && season) {
      thisSeason = seasons[year + '-' + season]
    } else {
      thisSeason = seasons[currentSeason.year + '-' + currentSeason.season]
    }

    return (
      <div className="home">
        <ul className="anime-container">
          <AnimeList animes={thisSeason} />
        </ul>
      </div>
    )
  }
}


const mapStateToProps = ({  seasons, config}) => ({ seasons, config })

export default connect(mapStateToProps, { getSeason })(AnimeBySeason)
