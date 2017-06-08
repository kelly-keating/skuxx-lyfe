import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'


const renderButton = () => {
   return (
     <div className='homeButt'><Link to={`/game`} >Play GAME</Link></div>
   )
 }

const Home = () => (
  <div>
    <div id='title'>SKUXX</div>
    {renderButton()}
  </div>
)

export default connect()(Home)
