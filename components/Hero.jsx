import React, { useEffect, useRef } from 'react'
import './Hero.css'
import down from '../../images/down.svg'

const Hero = () => {
  return (
    <>
      <div className="H-section">
        <div className="J-section">
          <p className="D-section">
            <small>i</small> Design <span>&</span> Code
          </p>
          <p className="d-section">
            I’m a front-end developer & UI designer based in Nigeria.
          </p>
        </div>
        <div className="A-section">
          <img src={down} alt="downward" />
        </div>
      </div>
    </>
  )
}

export default Hero
