import React, { useState } from 'react'
import Steps from './Component/Steps/Steps'
import Personal from './Component/Personal-Info/Personal'
import Plan from './Component/Plan/Plan'
import AddOns from './Component/Add-Ons/AddOns'
import Confirm from './Component/Confirm/Confirm'
import ThankYou from './Component/ThankYou/ThankYou'
import './App.css'

function App() {
  const [step, setStep] = useState(1)

  return (
    <div className='app-container'>
      <div className='app-wrapper'>
        <Steps step={step} />
        <div className='right-col'>
          {step === 1 && <Personal setStep={setStep} />}
          {step === 2 && <Plan setStep={setStep} />}
          {step === 3 && <AddOns setStep={setStep} />}
          {step === 4 && <Confirm setStep={setStep} />}
          {step === 5 && <ThankYou setStep={setStep} />}
        </div>
      </div>
    </div>
  )
}

export default App
