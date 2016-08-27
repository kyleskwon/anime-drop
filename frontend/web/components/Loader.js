import React from 'react'
import Loading from 'react-loading'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  loader: {
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute"
  }
})

const Loader = () => (
  <div className={css(styles.container)}>
    <Loading type='bars' color='#333' width="200px" delay="0"/>
  </div>
)


export default Loader
