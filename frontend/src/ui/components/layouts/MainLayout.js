// @flow
import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import ErrorPopup from '../ErrorPopup'
import { connect } from 'react-redux'

class Main extends React.Component {
  render(){
    return (
      <main className="main-container">
        <Header />
          {this.props.children}
        <Footer />
        <ErrorPopup />
      </main>
    )
  }
}

export default connect()(Main)
