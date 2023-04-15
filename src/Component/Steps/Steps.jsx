import React from 'react'
import './Steps.css'
function Steps({ step }) {
  return (
    <div className='left-col'>
      <div className='step-container'>
        <div className='step-number'>
          <p className={`step ${step === 1 ? 'active-step' : ''}`}>1</p>
        </div>
        <div className='step-info'>
          <p className='step-text'>Step 1</p>
          <p className='step-title'>Your info</p>
        </div>
      </div>
      <div className='step-container'>
        <div className='step-number'>
          <p className={`step ${step === 2 ? 'active-step' : ''}`}>2</p>
        </div>
        <div className='step-info'>
          <p className='step-text'>Step 2</p>
          <p className='step-title'>Select Plan</p>
        </div>
      </div>
      <div className='step-container'>
        <div className='step-number'>
          <p className={`step ${step === 3 ? 'active-step' : ''}`}>3</p>
        </div>
        <div className='step-info'>
          <p className='step-text'>Step 3</p>
          <p className='step-title'>add-ons</p>
        </div>
      </div>
      <div className='step-container'>
        <div className='step-number'>
          <p
            className={`step ${step === 4 || step === 5 ? 'active-step' : ''}`}
          >
            4
          </p>
        </div>
        <div className='step-info'>
          <p className='step-text'>Step 4</p>
          <p className='step-title'>summary</p>
        </div>
      </div>
    </div>
  )
}

export default Steps
