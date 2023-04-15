import React from 'react'
import './Steps.css'
function Steps() {
  return (
    <div className='left-col'>
      <div className='step-container'>
        <div className='step-number'>
          <p className='step active-step'>1</p>
        </div>
        <div className='step-info'>
          <p className='step-text'>Step 1</p>
          <p className='step-title'>Your info</p>
        </div>
      </div>
      <div className='step-container'>
        <div className='step-number'>
          <p className='step'>2</p>
        </div>
        <div className='step-info'>
          <p className='step-text'>Step 2</p>
          <p className='step-title'>Select Plan</p>
        </div>
      </div>
      <div className='step-container'>
        <div className='step-number'>
          <p className='step'>3</p>
        </div>
        <div className='step-info'>
          <p className='step-text'>Step 4</p>
          <p className='step-title'>add-ons</p>
        </div>
      </div>
      <div className='step-container'>
        <div className='step-number'>
          <p className='step'>4</p>
        </div>
        <div className='step-info'>
          <p className='step-text'>Step 5</p>
          <p className='step-title'>summary</p>
        </div>
      </div>
    </div>
  )
}

export default Steps
