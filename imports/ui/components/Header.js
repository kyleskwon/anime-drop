// @flow
import React from 'react'
import { Link } from 'react-router'

export default () => {
  return (
    <header>
      <h2 className="site-title">Anime Drop</h2>
      <nav className="primary">
        <Link to="/2016/winter">Winter</Link>
        <Link to="/2016/spring">Spring</Link>
        <Link to="/2016/summer">Summer</Link>
        <Link to="/2016/fall">Fall</Link>
      </nav>
    </header>
  )
}
