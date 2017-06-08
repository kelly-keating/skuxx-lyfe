import React from 'react'
import {connect} from 'react-redux'

const doThing = () => {
  console.log('hi')
}

const Home = ({greetings, dispatch}) => (
  <div>
    <div id='title'>SKUXX</div>
    <button onClick={() => doThing()}>Start GAME</button>
  </div>
)

export default connect()(Home)
