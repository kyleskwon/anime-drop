// @flow
import React from 'react'
import { Link, withRouter } from 'react-router'
import { connect } from 'react-redux'

class Header extends React.Component {
  getPathNameYear(param, routing: Object, config: Object){
    if(routing.params.year)
      return `/${param}/${routing.params.season}`
    return `/${param}/${config.currentSeason.season}`
  }

  getPathNameSeason(param, routing: Object, config: Object){
    if(routing.params.season)
      return `/${routing.params.year}/${param}`
    return `/${config.currentSeason.year}/${param}`
  }

  handleRouteChange(param){
    const { routing, router, config } = this.props
    let pathname,
        type = typeof param === 'number' ? 'year' : 'season'

    switch(type){
      case 'year':
        pathname = this.getPathNameYear(param, routing, config)
        break
      case 'season':
        pathname = this.getPathNameSeason(param, routing, config)
        break
    }

    if(pathname === routing.location.pathname) return

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
          <a onClick={this.handleRouteChange.bind(this, 'winter')}>Winter</a>
          <a onClick={this.handleRouteChange.bind(this, 'spring')}>Spring</a>
          <a onClick={this.handleRouteChange.bind(this, 'summer')}>Summer</a>
          <a onClick={this.handleRouteChange.bind(this, 'fall')}>Fall</a>
          <a onClick={this.handleRouteChange.bind(this, 2016)}>2016</a>
          <a onClick={this.handleRouteChange.bind(this, 2015)}>2015</a>
          <a onClick={this.handleRouteChange.bind(this, 2014)}>2014</a>
          <a onClick={this.handleRouteChange.bind(this, 2013)}>2013</a>
        </nav>
      </header>
    )
  }
}

export default connect(({ routing, config }) => ({ routing, config }))(withRouter(Header))
