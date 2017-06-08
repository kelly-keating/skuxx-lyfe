import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Game from './Game'

import FormPage from '../containers/FormPage'

const App = () => (
  <Router>
    <div className='app-container'>
      <Game />
      <Route path = '/form' component={() =>
          <FormPage />}
      />
    </div>
  </Router>
)

export default App
