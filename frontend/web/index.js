import React from 'react'
import { render } from 'react-dom'
import Routes from './router'
import './main.styl'

render.render(
  <Routes />,
  document.getElementById('root')
);
