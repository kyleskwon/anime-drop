// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import AnimeBySeason from './AnimeBySeason'

class Home extends Component {

  render(){
    const { config: { currentSeason }}  = this.props
    return (
      <AnimeBySeason year={currentSeason.year} season={currentSeason.season} />
    )
  }
}

export default connect(({ config }) => ({ config }))(Home)
