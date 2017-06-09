import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import Game from './Game'
import EndPage from './EndPage'
import Nav from './Nav'

import FormPage from '../containers/FormPage'

const App = () => (
  <Router>
    <div className='app-container'>
      <Nav />
      <Route exact path='/' component={Home} />
      <Route exact path='/game' component={Game} />
      <Route exact path='/endPage' component={EndPage} />
      <Route path = '/form' component={FormPage}/>
    </div>
  </Router>
)

export default App
