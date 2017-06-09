import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'


const renderButton = () => {
   return (
     <Link to={`/game`} >
       <div className='homeButt'>Play GAME</div>
    </Link>
   )
 }

const Home = () => (
  <div>
    <div id='title'>SKUXX</div>
    {renderButton()}
  </div>
)

export default connect()(Home)
