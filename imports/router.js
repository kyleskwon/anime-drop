// @flow
import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'

import store, { history } from './store'
import Home from './ui/components/pages/Home'
import About from './ui/components/pages/About'
import Layout from './ui/components/layouts/MainLayout'
import AnimeDetails from './ui/components/pages/AnimeDetails'

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Home} />
        <Route path="/about" component={About} />
        <Route path="/anime/:id" component={AnimeDetails} />
      </Route>
    </Router>
  </Provider>
)

export default router
