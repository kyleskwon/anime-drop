// @flow
import React from 'react'
import { connect } from 'react-redux'

const ErrorPopup = ({ serverError }) => (
  <div className="notifier">
    {serverError.error ? <div className="server-error">{serverError.error.reason}</div> : "" }
  </div>
)

export default connect(({serverError})=>({serverError}))(ErrorPopup)
