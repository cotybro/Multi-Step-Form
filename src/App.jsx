import React from 'react'
import Steps from './Component/Steps/Steps'
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
        <Steps />
        <div className='right-col'>
          <Personal />
          {/* <Plan /> */}
          {/* <AddOns /> */}
          {/* <Confirm /> */}
          {/* <ThankYou /> */}
        </div>
      </div>
    </div>
  )
}

export default App
