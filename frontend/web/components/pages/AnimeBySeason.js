// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import AnimeListContainer from '../AnimeListContainer'

class AnimeBySeason extends Component {
  render(){
    const { seasons } = this.props

    if(this.props.season){
      var { year, season } = this.props
    } else {
      var { params: { year, season }} = this.props
    }

    return (
      <AnimeListContainer animes={seasons} year={year} season={season} />
    )
  }
}

export default connect(({ seasons }) => ({ seasons }))(AnimeBySeason)
