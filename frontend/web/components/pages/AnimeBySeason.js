// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import AnimeListContainer from '../AnimeListContainer'

class AnimeBySeason extends Component {
  props: {
    seasons: {},
    season: ?string,
    year: ?number,
    params: {
      year: ?number,
      season: ?string
    }
  }
  render(){
    let { seasons, year, season } = this.props

    if(this.props.params){
      let { params } = this.props
      season = params.season
      year = params.year
    }

    return (
      <AnimeListContainer animes={seasons} year={year} season={season} />
    )
  }
}

export default connect(({ seasons }) => ({ seasons }))(AnimeBySeason)
