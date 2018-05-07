import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

const Menu  = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/dashboard"><i className="fas fa-tachometer-alt"/>Dashboard</Link>
        <Link to="/favorites"><i className="far fa-star"/>Favorites</Link>
        <Link to="/alerts"><i className="far fa-bell"/>Alerts</Link>
        <Link to="/messages"><i className="far fa-envelope"/>Messages</Link>
        <Link to="/account"><i className="far fa-user"/>Account</Link>
      </nav>
    </BrowserRouter>
  )
}

export default Menu