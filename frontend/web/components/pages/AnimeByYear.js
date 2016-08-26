// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import AnimeListContainer from '../AnimeListContainer'

class AnimeByYear extends Component {
  props: {
    year: ?number,
    seasons: Object,
    params: Object
  }

  render(){
    let { seasons, year } = this.props

    if(this.props.params) {
      let { params } = this.props
      year = params.year
    }

    return (
      <AnimeListContainer animes={seasons} year={year} />
    )
  }
}

export default connect(({ seasons }) => ({ seasons }))(AnimeByYear)
