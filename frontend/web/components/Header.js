// @flow
import React from 'react'
import { Link, withRouter } from 'react-router'
import { connect } from 'react-redux'

class Header extends React.Component {
  handleRouteChange(){
    console.log(this.props.routing.locationBeforeTransitions)
    console.log(this.props)
    // if(genresArr.length > 0 ) {
    //   genres = genresArr.join(',')
    //   console.log(router)
    //   router.replace({
    //     pathname: currentPath,
    //     query: { genres }
    //   })
    // } else {
    //   router.replace({
    //     pathname: currentPath,
    //     query: {}
    //   })
    // }
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
