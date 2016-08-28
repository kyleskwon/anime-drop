// @flow
import React from 'react'
import { Link, withRouter } from 'react-router'
import { connect } from 'react-redux'

class Header extends React.Component {
  handleSeasonChange(season){
    const { routing, router, config } = this.props
    let pathname

    if(!routing.params.year) {
      pathname = `/${config.currentSeason.year}/season`
    } else {
      pathname = `/${routing.params.year}/${season}`
    }
    router.push({
      pathname,
      query: routing.location.query
    })
  }
  handleYearChange(year){
    const { routing, router, config } = this.props
    let pathname

    if(!routing.params.season) {
      pathname = `/${year}/${config.currentSeason.season}`
    } else {
      pathname = `/${year}/${routing.params.season}`
    }
    router.push({
      pathname,
      query: routing.location.query
    })
  }
  render(){
    return (
      <header>
        <Link to="/"><h2 className="site-title">Anime Drop</h2></Link>
        <nav className="primary">
          <a onClick={this.handleSeasonChange.bind(this, 'winter')}>Winter</a>
          <a onClick={this.handleSeasonChange.bind(this, 'spring')}>Spring</a>
          <a onClick={this.handleSeasonChange.bind(this, 'summer')}>Summer</a>
          <a onClick={this.handleSeasonChange.bind(this, 'fall')}>Fall</a>
          <a onClick={this.handleYearChange.bind(this, 2016)}>2016</a>
          <a onClick={this.handleYearChange.bind(this, 2015)}>2015</a>
          <a onClick={this.handleYearChange.bind(this, 2014)}>2014</a>
          <a onClick={this.handleYearChange.bind(this, 2013)}>2013</a>
        </nav>
      </header>
    )
  }
}

export default connect(({ routing, config }) => ({ routing, config }))(withRouter(Header))
