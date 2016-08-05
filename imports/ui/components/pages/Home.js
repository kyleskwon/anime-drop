// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import SeasonSelect from '../SeasonSelect'
import  { getSeason  } from '../../../actions/animeList'

class Home extends Component {
  props: {
    serverError: Object,
    seasons: Object,
    getSeason: Function,
    params: Object,
    config: Object
  }

  loadAnime(props){
    const {
      getSeason,
      seasons,
      params: { year, season },
      config: { currentSeason }
    } = props

    if(year && season && !seasons[season + '-' + year]) {
      getSeason(year, season)
    } else if(Object.keys(seasons).length === 0){
      getSeason(currentSeason.year, currentSeason.season)
    }
  }

  componentWillMount(){
    this.loadAnime(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.loadAnime(nextProps)
  }

  formatScore (averageScore: number) {
    return averageScore === 0 ? "Not yet rated" : averageScore
  }

  render(){
    const {
      serverError,
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
                <h3>{anime.title_romaji}</h3>
                <div class="score">{this.formatScore(anime.average_score)}</div>
              </div>
            </Link>
          </li>
        ))
    }

    return (
      <div className="home">
        <SeasonSelect />
        <ul className="anime-container">
          {animeList}
        </ul>
      </div>
    )
  }
}


const mapStateToProps = ({  seasons, config}) => ({ seasons, config })

const mapDispatchToProps = dispatch => ({
  getSeason(year, season){
    dispatch(getSeason(year, season))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
