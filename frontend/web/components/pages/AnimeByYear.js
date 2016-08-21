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
    const { years } = this.props
    
    if(this.props.year){
      var { year } = this.props
    } else {
      var { params: { year }} = this.props
    }

    return (
      <AnimeListContainer animes={years} year={year} />
    )
  }
}

export default connect(({ years }) => ({ years }))(AnimeByYear)
