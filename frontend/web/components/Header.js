// @flow
import React from 'react'
import { Link } from 'react-router'

export default () => {
  return (
    <header>
      <Link to="/"><h2 className="site-title">Anime Drop</h2></Link>
      <nav className="primary">
        <Link to="/2016/winter">Winter</Link>
        <Link to="/2016/spring">Spring</Link>
        <Link to="/2016/summer">Summer</Link>
        <Link to="/2016/fall">Fall</Link>
        <Link to="/2015">2015</Link>
        <Link to="/2016">2016</Link>

      </nav>
    </header>
  )
}
