import React, { useState, useEffect } from 'react'
import Steps from './Component/Steps/Steps'
import Personal from './Component/Personal-Info/Personal'
import Plan from './Component/Plan/Plan'
import AddOns from './Component/Add-Ons/AddOns'
import Confirm from './Component/Confirm/Confirm'
import ThankYou from './Component/ThankYou/ThankYou'
import './App.css'

function App() {
  const [info, setInfo] = useState({
    name: '',
    email: '',
    phone: '',
  })
  const [step, setStep] = useState(1)
  const [plan, setPlan] = useState('Arcade')
  const [time, setTime] = useState(false)
  const [price, setPrice] = useState(9)
  const [totalPrice, setTotalPrice] = useState(0)
  const [addons, setAddons] = useState({
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
    onlinePrice: 1,
    storagePrice: 2,
    profilePrice: 2,
  })

  return (
    <div className='app-container'>
      <div className='app-wrapper'>
        <Steps step={step} />
        <div className='right-col'>
          {step === 1 && <Personal setStep={setStep} />}
          {step === 2 && (
            <Plan
              setStep={setStep}
              setPlan={setPlan}
              plan={plan}
              price={price}
              setPrice={setPrice}
              time={time}
              setTime={setTime}
            />
          )}
          {step === 3 && (
            <AddOns addons={addons} setStep={setStep} setAddons={setAddons} />
          )}
          {step === 4 && (
            <Confirm
              setStep={setStep}
              plan={plan}
              setPrice={setPrice}
              price={price}
              addons={addons}
              time={time}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
            />
          )}
          {step === 5 && <ThankYou />}
        </div>
      </div>
    </div>
  )
}

export default App
