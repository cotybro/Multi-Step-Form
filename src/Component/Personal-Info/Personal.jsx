import React from 'react'
import './Personal.css'

function Personal({ setStep, setInfo }) {
  const handleNextClick = () => {
    const nameInput = document.getElementById('name')
    const emailInput = document.getElementById('email')
    const phoneInput = document.getElementById('phone')
    let step = 0

    if (nameInput.value === '') {
      nameInput.classList.add('invalid')
      nameInput.previousElementSibling.querySelector(
        '.invalid-text'
      ).style.display = 'block'
    } else {
      nameInput.classList.remove('invalid')
      nameInput.previousElementSibling.querySelector(
        '.invalid-text'
      ).style.display = 'none'
      step++
    }

    if (emailInput.value === '') {
      emailInput.classList.add('invalid')
      emailInput.previousElementSibling.querySelector(
        '.invalid-text'
      ).style.display = 'block'
    } else {
      emailInput.classList.remove('invalid')
      emailInput.previousElementSibling.querySelector(
        '.invalid-text'
      ).style.display = 'none'
      step++
    }

    if (phoneInput.value === '') {
      phoneInput.classList.add('invalid')
      phoneInput.previousElementSibling.querySelector(
        '.invalid-text'
      ).style.display = 'block'
    } else {
      phoneInput.classList.remove('invalid')
      phoneInput.previousElementSibling.querySelector(
        '.invalid-text'
      ).style.display = 'none'
      step++
    }

    if (step === 3) {
      setStep((i) => i + 1)
      setInfo({
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
      })
    }
  }

  return (
    <div className='personal-wrapper'>
      <h1 className='app-title'>Personal info</h1>
      <p className='app-text'>
        Please provide your name, email address, and phone number.
      </p>
      <form id='form'>
        <label htmlFor='name'>
          Name <p className='invalid-text'>This field is required</p>
        </label>
        <input
          type='text'
          id='name'
          placeholder='e.g. Stephen King'
          required
          className=''
        />
        <label htmlFor='email'>
          Email Address <p className='invalid-text'>This field is required</p>
        </label>
        <input
          type='email'
          id='email'
          placeholder='e.g. stephenking@lorem.com'
          required
          className=''
        />
        <label htmlFor='phone'>
          Phone Number <p className='invalid-text'>This field is required</p>
        </label>

        <input
          type='tel'
          id='phone'
          placeholder='e.g. +1 234 567 890'
          required
          className=''
        />
      </form>
      <button
        className='btn btn-personal'
        type='submit'
        form='form'
        onClick={handleNextClick}
      >
        Next Step
      </button>
    </div>
  )
}

export default Personal
