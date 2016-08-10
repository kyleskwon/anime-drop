// @flow
import React, { Component } from 'react'
import { Link } from 'react-router'

class SeasonSelect extends Component {
  render() {
    return (
      <div>
        <Link to="/2016/summer" >Summer 2016</Link>
        <Link to="/2016/spring" >Spring 2016</Link>
        <Link to="/2015/winter" >Winter 2015</Link>
      </div>
    )
  }
}

export default SeasonSelect;
