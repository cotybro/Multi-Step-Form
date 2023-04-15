import React from 'react'
import './Confirm.css'

function Confirm() {
  return (
    <div className='confirm-wrapper'>
      <div className='confirm-container'>
        <p className='app-title'>Finishing up</p>
        <p className='app-text'>
          Double-check everything looks OK before confirming.
        </p>
        <div className='confirm-info-wrapper'>
          <div className='inside-wrapper'>
            <div className='confirm-col bottom-line'>
              <div className='confirm-top'>
                <p className='confirm-info-plan'>Arcade (Monthly)</p>
                <button className='change-plan'>Change</button>
              </div>
              <p className='plan-price'>$9/mo</p>
            </div>
            <div className='confirm-col col-top'>
              <p className='confirm-addons-text'>Online service</p>
              <p className='confirm-addons-price'>+$1/mo</p>
            </div>
            <div className='confirm-col'>
              <p className='confirm-addons-text'>Larger storage</p>
              <p className='confirm-addons-price'>+$2/mo</p>
            </div>
          </div>
          <div className='confirm-col col-bottom'>
            <p className='confirm-total-text'>Total (per month)</p>
            <p className='confirm-total-price'>$12/mo</p>
          </div>
        </div>
      </div>
      <button className='back-btn'>Go Back</button>
      <button className='btn accent-btn' type='submit'>
        Confirm
      </button>
    </div>
  )
}

export default Confirm
