import React, { useEffect, useRef, useState } from 'react'
import RequestButton from '../RequestButton/RequestButton.tsx';
import '../RequestButton/RequestButton.scss';

function Navbar() {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  }


  return (
    <nav className='nav'>
      <div className='nav__div'>
        <h1>soller</h1>
        <form action="#" className={isMenuOpen ? 'open' : ""}>
          <ul>
            <li><a href="#">Products</a></li>
            <li><a href="#">Solutions</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Configure</a></li>
          </ul>
          <div className='nav-button-div'>
            <button>
              <img src="./assets/headset.svg" alt="" />555 818 282
            </button>
            <RequestButton/>
          </div>
        </form>
      </div>
      <div className='hamburger'id={isMenuOpen ? 'hamburger-open' : ""} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
    </nav>
  )
}

export default Navbar



