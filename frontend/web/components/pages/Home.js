// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { getSeason  } from '../../../actions/animeList'

class Home extends Component {
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

    if(thisSeason) {
      animeList = thisSeason
        .sort((a, b) => a.average_score > b.average_score ? -1 : 1)
        .map((anime, i) => (
          <li className="anime-item" key={i}>
            <Link to={`/anime/${anime.id}`}>
              <img src={anime.image_url_lge} />
              <div className="overlay">
                <h3><span>{anime.title_romaji}</span></h3>
                {anime.average_score ? <div className="score">{this.formatScore(anime.average_score)}</div> : null}
              </div>
            </Link>
          </li>
        ))
    }

    return (
      <div className="home">
        <ul className="anime-container">
          {animeList}
        </ul>
      </div>
    )
  }
}


const mapStateToProps = ({  seasons, config}) => ({ seasons, config })

export default connect(mapStateToProps, { getSeason })(Home)
