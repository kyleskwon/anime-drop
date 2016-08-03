// @flow
import React, { Component } from 'react'
import { Link } from 'react-router'

class SeasonSelect extends Component {
  render() {
    return (
      <div>
        <Link to="/summer/2016" >Summer 2016</Link>
        <Link to="/spring/2016" >Spring 2016</Link>
        <Link to="/winter/2015" >Winter 2015</Link>
      </div>
    )
  }
}

export default SeasonSelect;
