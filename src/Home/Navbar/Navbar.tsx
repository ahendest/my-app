import React, { useEffect, useRef, useState } from 'react'

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
            <button>
              Request a Quote <img src="./assets/arrow-right.svg" alt="" />
            </button>
          </div>
        </form>
      </div>
      <div className='hamburger' onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
    </nav>
  )
}

export default Navbar


