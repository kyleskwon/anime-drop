// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import SeasonSelect from '../SeasonSelect'
import  { getSeason  } from '../../actions/animeList'

class Home extends Component {
  props: {
    submitHandler: Function,
    serverError: Object,
    seasons: Object,
    getSeason: Function,
    params: Object,
  }

  loadAnime(props){
    const { params: { year, season }, getSeason, seasons } = props
    if(year && season) {
      if(!seasons[season + '-' + year]) {
        getSeason(year, season)
      }
    } else if(seasons.length === 0) {
      getSeason(2016, 'summer')
    }
  }

  componentWillMount(){
    this.loadAnime(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.loadAnime(nextProps)
  }

  formatScore (averageScore: number) {
    if (averageScore === 0) {
      return "Not yet rated"
    } else {
      return averageScore
    }
  }
  render(){
    let { submitHandler, serverError, seasons, params: {year, season} } = this.props;
    let thisSeason = seasons[season + '-' + year];
    let animeList = null

    console.log(thisSeason)

    if(thisSeason){
      animeList = thisSeason
        .sort((a, b) => a.average_score > b.average_score ? -1 : 1)
        .map((anime, i) => (
          <li className="anime-item" key={i}>
            <Link to={`/anime/${anime.id}`}>
              <h3>{anime.title_english}</h3>
              <img src={anime.image_url_med} />
              <h4>{this.formatScore(anime.average_score)}</h4>
            </Link>
          </li>
        ))
    }

    return (
      <div className="home">
        <SeasonSelect />
        <div className="notifier">
          {serverError.error ? <div className="server-error">{serverError.error.reason}</div> : "" }
        </div>
        <ul className="anime-container">
          {animeList}
        </ul>
      </div>
    )
  }
}


const mapStateToProps = ({ serverError, seasons}) => ({ serverError, seasons })

const mapDispatchToProps = dispatch => ({
  getSeason(year, season){
    dispatch(getSeason(year, season))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
