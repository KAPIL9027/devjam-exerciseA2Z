import React from 'react';
import {Link} from 'react-router-dom';
const Header = () => {
  return (
    <header>
    <div className="header-top">
    <Link to="/"><div className="logo">exercise<span id="a2z">A2Z</span></div></Link>
    </div>
      <div className="header-down">
        <div className="navs">
        <div><Link className="nav-link" to="/body">PARTS</Link></div>
        <div><Link className="nav-link" to="/muscles">MUSCLES</Link></div>
        <div><Link className="nav-link" to="/equipments">EQUIPMENTS</Link></div>
        </div>
      </div>
    </header>
  )
}

export default Header
