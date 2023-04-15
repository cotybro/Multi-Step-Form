import React from 'react'
import './ThankYou.css'
import CheckMark from '../../assets/images/icon-thank-you.svg'
function ThankYou() {
  return (
    <div className='thank-you-container'>
      <div className='thank-you-wrapper'>
        <img src={CheckMark} alt='Check Mark' />
        <h3 className='thank-you-title'>Thank you!</h3>
        <p className='thank-you-text'>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  )
}

export default ThankYou
