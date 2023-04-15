import React from 'react'
import './Personal.css'

function Personal({ setStep }) {
  return (
    <div className='personal-wrapper'>
      <h1 className='app-title'>Personal info</h1>
      <p className='app-text'>
        Please provide your name, email address, and phone number.
      </p>
      <form id='form'>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' placeholder='e.g. Stephen King' required />
        <label htmlFor='email'>Email Address</label>
        <input
          type='email'
          id='email'
          placeholder='e.g. stephenking@lorem.com'
          required
        />
        <label htmlFor='phone'>Phone Number</label>
        <input
          type='tel'
          id='phone'
          placeholder='e.g. +1 234 567 890'
          required
        />
      </form>
      <button
        className='btn'
        type='submit'
        form='form'
        onClick={() => setStep((i) => i + 1)}
      >
        Next Step
      </button>
    </div>
  )
}

export default Personal
