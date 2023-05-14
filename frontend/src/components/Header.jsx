import React from 'react';
import {Link} from 'react-router-dom';
const Header = () => {
  return (
    <header>
    <div className="header-top">
    <div className="logo">exercise<span id="a2z">A2Z</span></div>
    </div>
      <div className="header-down">
        <div className="navs">
        <div><Link className="nav-link" to="/parts">PARTS</Link></div>
        <div><Link className="nav-link" to="/muscles">MUSCLES</Link></div>
        <div><Link className="nav-link" to="/equipments">EQUIPMENTS</Link></div>
        </div>
      </div>
    </header>
  )
}

export default Header
