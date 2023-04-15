import React from 'react'
import Personal from './Component/Personal-Info/Personal'
import Plan from './Component/Plan/Plan'
import AddOns from './Component/Add-Ons/AddOns'
import Confirm from './Component/Confirm/Confirm'
import ThankYou from './Component/ThankYou/ThankYou'
import './App.css'

function App() {
  return (
    <div className='app-container'>
      <div className='app-wrapper'>
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
        <div className='right-col'>
          {/* <Personal /> */}
          {/* <Plan /> */}
          {/* <AddOns /> */}
          {/* <Confirm /> */}
          <ThankYou />
        </div>
      </div>
    </div>
  )
}

export default App
