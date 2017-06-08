import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => (
    <div className='nav-container'>
      <Link to="/">Home</Link> | <Link to="/form">Add Skuxx</Link>
    </div>
)

export default Nav
