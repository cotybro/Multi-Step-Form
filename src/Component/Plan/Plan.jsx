import React from 'react'
import ArcadeImg from '../../assets/images/icon-arcade.svg'
import AdvancedImg from '../../assets/images/icon-advanced.svg'
import ProImg from '../../assets/images/icon-pro.svg'
import './Plan.css'

function Plan() {
  return (
    <div className='plan-wrapper'>
      <h2 className='app-title'>Select your plan</h2>
      <p className='app-text'>
        You have the option of monthly or yearly billing.
      </p>
      <div className='plan-container'>
        <div className='plan-card active-card'>
          <div className='plan-card-wrapper'>
            <img src={ArcadeImg} alt='Arcade Plan' className='card-img' />
            <h3 className='plan-card-title'>Arcade</h3>
            <p className='plan-card-price'>$9/mo</p>
            {/* <p className='plan-card-year'>2 months free</p> */}
          </div>
        </div>
        <div className='plan-card'>
          <div className='plan-card-wrapper'>
            <img src={AdvancedImg} alt='Advanced Plan' className='card-img' />
            <h3 className='plan-card-title'>Advanced</h3>
            <p className='plan-card-price'>$12/mo</p>
            {/* <p className='plan-card-year'>2 months free</p> */}
          </div>
        </div>
        <div className='plan-card'>
          <div className='plan-card-wrapper'>
            <img src={ProImg} alt='Pro Plan' className='card-img' />
            <h3 className='plan-card-title'>Pro</h3>
            <p className='plan-card-price'>$15/mo</p>
            {/* <p className='plan-card-year'>2 months free</p> */}
          </div>
        </div>
      </div>
      <div className='time-container'>
        <p className='time-text month active-time'>Monthly</p>
        <label class='switch'>
          <input type='checkbox' />
          <span class='slider'></span>
        </label>
        <p className='time-text year'>Yearly</p>
      </div>
      <button className='back-btn'>Go Back</button>
      <button className='btn' type='submit'>
        Next Step
      </button>
    </div>
  )
}

export default Plan
