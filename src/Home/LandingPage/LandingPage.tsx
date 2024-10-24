import React from 'react'

function LandingPage() {
  return (
    <div className='hero'>
      <div className='img-div'>
        <img src="./assets/solar-panel2.png" alt="a person, installing solar panel." className='img'/>    
      </div>
      <div className='hero text'>
        <h1>Get the Sun to Power Your Home</h1>
        <p>Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque.</p>
        <button>
          Request a Quote
          <img src="./assets/arrow-right.svg" alt="" />
        </button>
      </div>
      <div className='hero-below'>
        <p className='hero-below text'>
        “Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque faucibus.”
        </p>
        <div className='user-card'>
          <img src="./assets/rwanda.jpeg" alt="" />
          <div className='user-card para-div'>
            <p>Rwanda Melflor</p>
            <p>zerowaste.com</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default LandingPage
