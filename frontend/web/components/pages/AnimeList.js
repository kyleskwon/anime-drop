// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { getYear } from '../../../actions/animeList'

class AnimeList extends Component {
  props: {
    year: Number,
    getYear: Function,
    params: Object
  }

  loadAnime(newProps, oldProps) {
    let props = newProps || this.props
    const {
      getYear,
      years,
      params: {year},
      config: { currentYear }
    } = props

    getYear(year)
  }


  componentWillMount() {
    this.loadAnime()
    console.log('loaded anime')
  }

  componentWillReceiveProps(nextProps) {
    if(
      this.props.years.loading !== nextProps.years.loading ||
      this.props.config.token !== nextProps.config.token
    ){
      return
    }
    if(!this.props.years.loading){
      this.loadAnime(nextProps)
    }
  }

  formatScore (averageScore: number) {
    return averageScore === 0 ? "" : averageScore
  }

  render() {
    const {
      years,
      params: { year },
      config: { currentYear }
    } = this.props

    let thisYear = years[year],
        animeList

    if (thisYear) {
      animeList = thisYear
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

const mapStateToProps = ({years , config}) => ({years, config})

const mapDispatchToProps = dispatch => ({
  getYear(year) {
    dispatch(getYear(year))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AnimeList)
