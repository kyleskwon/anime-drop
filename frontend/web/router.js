// @flow
import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncParams } from 'react-router-redux-params'

import store from './store'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Layout from './components/layouts/MainLayout'
import AnimeDetails from './components/pages/AnimeDetails'
import AnimeByYear from './components/pages/AnimeByYear'
import AnimeBySeason from './components/pages/AnimeBySeason'
import Search from './components/pages/Search'

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    <Route path="/about" component={About} />
    <Route path="/anime/:id" component={AnimeDetails} />
    <Route path="/search/:query" component={Search} />
    <Route path="/:year/:season" component={AnimeBySeason} />
    <Route path="/:year" component={AnimeByYear} />
  </Route>
)

syncParams(store, routes, browserHistory)

const Routes = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>
)

export default Routes
