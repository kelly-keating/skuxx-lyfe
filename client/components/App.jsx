import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'


const App = () => (
  <div className='app-container'>
    <Router >
      <span>
        <Route exact path='/' component={Home} />
      </span>
    </Router>
  </div>
)

export default App
