import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => (
    <div className='nav-container'>
      <Link to="/"><img src='http://i.imgur.com/jMMEjEY.gif'/></Link>
      <br/>
      <Link to="/form">Add Skuxx</Link>
    </div>
)

export default Nav
