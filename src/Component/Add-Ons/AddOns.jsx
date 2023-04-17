import React, { useState } from 'react'
import './AddOns.css'

function AddOns({ setStep, setAddons, addons }) {
  const [onlineService, setOnlineService] = useState(
    addons.onlineService || false
  )
  const [largerStorage, setLargerStorage] = useState(
    addons.largerStorage || false
  )
  const [customizableProfile, setCustomizableProfile] = useState(
    addons.customizableProfile || false
  )

  const handleOnlineServiceClick = () => {
    setOnlineService(!onlineService)
    setAddons((i) => {
      return { ...i, onlineService: !i.onlineService }
    })
  }

  const handleLargerStorageClick = () => {
    setLargerStorage(!largerStorage)
    setAddons((i) => {
      return { ...i, largerStorage: !i.largerStorage }
    })
  }

  const handleCustomizableProfileClick = () => {
    setCustomizableProfile(!customizableProfile)
    setAddons((i) => {
      return { ...i, customizableProfile: !i.customizableProfile }
    })
  }
  return (
    <div className='addons-wrapper'>
      <h1 className='app-title'>Pick add-ons</h1>
      <p className='app-text'>Add-ons help enhance your gaming experience.</p>
      <div className='addons-container'>
        <label className={`addon ${onlineService ? 'active-checkbox' : ''}`}>
          <input
            type='checkbox'
            name='online-service'
            id='online-service'
            checked={onlineService}
            onChange={handleOnlineServiceClick}
          />
          <div className='addon-col'>
            <p className='addon-title'>Online Service</p>
            <p className='addon-text'>Access to multiplayer games</p>
          </div>
          <div className='addon-end'>
            <p className='addon-price'>+$1/mo</p>
          </div>
        </label>
        <label className={`addon ${largerStorage ? 'active-checkbox' : ''}`}>
          <input
            type='checkbox'
            name='larger-storage'
            id='larger-storage'
            checked={largerStorage}
            onChange={handleLargerStorageClick}
          />
          <div className='addon-col'>
            <p className='addon-title'>Larger storage</p>
            <p className='addon-text'>Extra 1TB of cloud save</p>
          </div>
          <div className='addon-end'>
            <p className='addon-price'>+$2/mo</p>
          </div>
        </label>
        <label
          className={`addon ${customizableProfile ? 'active-checkbox' : ''}`}
        >
          <input
            type='checkbox'
            name='customizable-profile'
            id='customizable-profile'
            checked={customizableProfile}
            onChange={handleCustomizableProfileClick}
          />
          <div className='addon-col'>
            <p className='addon-title'>Customizable profile</p>
            <p className='addon-text'>Custom theme on your profile</p>
          </div>
          <div className='addon-end'>
            <p className='addon-price'>+$2/mo</p>
          </div>
        </label>
      </div>
      <button className='back-btn' onClick={() => setStep((i) => i - 1)}>
        Go Back
      </button>
      <button className='btn' onClick={() => setStep((i) => i + 1)}>
        Next Step
      </button>
    </div>
  )
}

export default AddOns
