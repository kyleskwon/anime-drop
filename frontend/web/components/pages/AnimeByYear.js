// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import AnimeListContainer from '../AnimeListContainer'

class AnimeByYear extends Component {
  props: {
    year: ?number,
    years: Object,
    params: Object
  }

  render(){
    let { years, year } = this.props

    if(this.props.params) {
      let { params } = this.props
      year = params.year
    }

    return (
      <AnimeListContainer animes={years} year={year} />
    )
  }
}

export default connect(({ years }) => ({ years }))(AnimeByYear)
