// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import AL from '../../../api/anilist'

class Search extends Component {

  componentWillMount() {
    AL.getAPIToken()
      .then(token => AL.searchAnime('naruto', token.access_token))
      .then(data => console.log(data))

  }

  render(){
    return (
        <div>Search</div>
    )
  }
}

export default connect(({ seasons }) => ({ seasons }))(Search)
