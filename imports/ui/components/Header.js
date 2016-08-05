// @flow
import React, { Component } from 'react'
import { Link } from 'react-router'

class Header extends Component {
  render () {
    return (
      <header>
        <h2 className="site-title">Anime Drop</h2>
        <nav className="primary">
          <Link to="/2016/Winter">Winter</Link>
          <Link to="/2016/Spring">Spring</Link>
          <Link to="/2016/Summer">Summmer</Link>
          <Link to="/2016/Fall">Fall</Link>
        </nav>
      </header>
    )
  }
}

export default Header
