import React, { useState } from 'react'
import ArcadeImg from '../../assets/images/icon-arcade.svg'
import AdvancedImg from '../../assets/images/icon-advanced.svg'
import ProImg from '../../assets/images/icon-pro.svg'
import './Plan.css'

function Plan({ setStep, setPlan, plan, setPrice, time, setTime }) {
  const [selectedCard, setSelectedCard] = useState(null)

  const handleCardClick = (cardName) => {
    setSelectedCard(cardName)
    setPlan(cardName)
    if (cardName === 'Arcade') {
      setPrice(time ? 90 : 9)
    } else if (cardName === 'Advanced') {
      setPrice(time ? 120 : 12)
    } else if (cardName === 'Pro') {
      setPrice(time ? 150 : 15)
    }
  }

  const handleTimeClick = (e) => {
    setTime(e.target.checked)
    setPrice(
      selectedCard === 'Arcade'
        ? e.target.checked
          ? 90
          : 9
        : selectedCard === 'Advanced'
        ? e.target.checked
          ? 120
          : 12
        : e.target.checked
        ? 150
        : 15
    )
  }

  const handleNextClick = () => {
    if (plan === '') {
      alert('Please select a plan')
      return
    } else {
      setStep((i) => i + 1)
    }
  }

  return (
    <div className='plan-wrapper'>
      <h2 className='app-title'>Select your plan</h2>
      <p className='app-text'>
        You have the option of monthly or yearly billing.
      </p>
      <div className='plan-container'>
        <div
          className={`plan-card ${
            selectedCard === 'Arcade' ? 'active-card' : ''
          }`}
          onClick={() => handleCardClick('Arcade')}
        >
          <div className='plan-card-wrapper'>
            <img src={ArcadeImg} alt='Arcade Plan' className='card-img' />
            <div className='plan-mobile'>
              <h3 className='plan-card-title'>Arcade</h3>
              <p className='plan-card-price'>{time ? '$90/yr' : '$9/mo'}</p>
              {time ? <p className='plan-card-year'>2 months free</p> : ''}
            </div>
          </div>
        </div>
        <div
          className={`plan-card ${
            selectedCard === 'Advanced' ? 'active-card' : ''
          }`}
          onClick={() => handleCardClick('Advanced')}
        >
          <div className='plan-card-wrapper'>
            <img src={AdvancedImg} alt='Advanced Plan' className='card-img' />
            <div className='plan-mobile'>
              <h3 className='plan-card-title'>Advanced</h3>
              <p className='plan-card-price'>{time ? '$120/yr' : '$12/mo'}</p>
              {time ? <p className='plan-card-year'>2 months free</p> : ''}
            </div>
          </div>
        </div>
        <div
          className={`plan-card ${selectedCard === 'Pro' ? 'active-card' : ''}`}
          onClick={() => handleCardClick('Pro')}
        >
          <div className='plan-card-wrapper'>
            <img src={ProImg} alt='Pro Plan' className='card-img' />
            <div className='plan-mobile'>
              <h3 className='plan-card-title'>Pro</h3>
              <p className='plan-card-price'>{time ? '$150/yr' : '$15/mo'}</p>
              {time ? <p className='plan-card-year'>2 months free</p> : ''}
            </div>
          </div>
        </div>
      </div>
      <div className='time-container'>
        <p className='time-text month active-time'>Monthly</p>
        <label className='switch'>
          <input type='checkbox' checked={time} onChange={handleTimeClick} />
          <span className='slider'></span>
        </label>
        <p className='time-text year'>Yearly</p>
      </div>
      <button className='back-btn' onClick={() => setStep((i) => i - 1)}>
        Go Back
      </button>
      <button className='btn' type='submit' onClick={handleNextClick}>
        Next Step
      </button>
    </div>
  )
}

export default Plan
