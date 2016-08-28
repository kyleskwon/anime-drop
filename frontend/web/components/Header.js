// @flow
import React from 'react'
import { Link, withRouter } from 'react-router'
import { connect } from 'react-redux'

class Header extends React.Component {
  handleRouteChange(season){
    const { routing, router } = this.props
    let pathname

    if(!routing.params.year) {
      pathname = "/2016/" + season
    } else {
      pathname = `/${routing.params.year}/${season}`
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
          <a onClick={this.handleRouteChange.bind(this, 'winter')}>Winter</a>
          <a onClick={this.handleRouteChange.bind(this, 'spring')}>Spring</a>
          <a onClick={this.handleRouteChange.bind(this, 'summer')}>Summer</a>
          <a onClick={this.handleRouteChange.bind(this, 'fall')}>Fall</a>
        </nav>
      </header>
    )
  }
}

export default connect(({ routing }) => ({ routing }))(withRouter(Header))
