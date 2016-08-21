// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { getYear } from '../../actions/animeList'
import AnimeList from './pages/AnimeList'

class AnimeByYear extends Component {
  props: {
    years: Object,
    getYear: Function,
    params: Object,
    config: Object
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
    }
    console.log(animeList)
    return (
      <AnimeList animes={animeList}/>
    )
  }
}

const mapStateToProps = ({years , config}) => ({years, config})

const mapDispatchToProps = dispatch => ({
  getYear(year) {
    dispatch(getYear(year))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AnimeByYear)
