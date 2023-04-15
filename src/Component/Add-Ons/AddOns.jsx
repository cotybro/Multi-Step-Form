import React from 'react'
import './AddOns.css'
function AddOns() {
  return (
    <div className='addons-wrapper'>
      <h1 className='app-title'>Pick add-ons</h1>
      <p className='app-text'>Add-ons help enhance your gaming experience.</p>
      <div className='addons-container'>
        <label className='addon active-checkbox'>
          <input type='checkbox' name='online-service' id='online-service' />
          <div className='addon-col'>
            <p className='addon-title'>Online Service</p>
            <p className='addon-text'>Access to multiplayer games</p>
          </div>
          <div className='addon-end'>
            <p className='addon-price'>+$1/mo</p>
          </div>
        </label>
        <label className='addon'>
          <input type='checkbox' name='larger-storage' id='larger-storage' />
          <div className='addon-col'>
            <p className='addon-title'>Larger storage</p>
            <p className='addon-text'>Extra 1TB of cloud save</p>
          </div>
          <div className='addon-end'>
            <p className='addon-price'>+$2/mo</p>
          </div>
        </label>
        <label className='addon'>
          <input
            type='checkbox'
            name='customizable-profile'
            id='customizable-profile'
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
      <button className='back-btn'>Go Back</button>
      <button className='btn'>Next Step</button>
    </div>
  )
}

export default AddOns
