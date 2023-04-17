import React, { useEffect } from 'react'
import './Confirm.css'

function Confirm({
  setStep,
  plan,
  price,
  addons,
  time,
  totalPrice,
  setTotalPrice,
}) {
  useEffect(() => {
    setTotalPrice(price)
  }, [price])

  useEffect(() => {
    let total = price
    if (addons.onlineService) {
      {
        time ? (total += 10) : (total += 1)
      }
    }
    if (addons.largerStorage) {
      {
        time ? (total += 20) : (total += 2)
      }
    }
    if (addons.customizableProfile) {
      {
        time ? (total += 20) : (total += 2)
      }
    }
    setTotalPrice(total)
  }, [addons, price, setTotalPrice])

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
                <p className='confirm-info-plan'>
                  {plan} ({time ? 'Yearly' : 'Monthly'})
                </p>
                <button className='change-plan' onClick={() => setStep(2)}>
                  Change
                </button>
              </div>
              <p className='plan-price'>${price}/mo</p>
            </div>
            <div className='confirm-col col-top'>
              {addons.onlineService ? (
                <>
                  <p className='confirm-addons-text'>Online service</p>
                  <p className='confirm-addons-price'>
                    +${time ? '10/yr' : '1/mo'}
                  </p>
                </>
              ) : null}
            </div>
            <div className='confirm-col col-top'>
              {addons.largerStorage ? (
                <>
                  <p className='confirm-addons-text'>Larger storage</p>
                  <p className='confirm-addons-price'>
                    +${time ? '20/yr' : '1/mo'}
                  </p>
                </>
              ) : null}
            </div>
            <div className='confirm-col'>
              {addons.customizableProfile ? (
                <>
                  <p className='confirm-addons-text'>Customizable profile</p>
                  <p className='confirm-addons-price'>
                    +${time ? '20/yr' : '1/mo'}
                  </p>
                </>
              ) : null}
            </div>
          </div>
          <div className='confirm-col col-bottom'>
            <p className='confirm-total-text'>
              Total (per {time ? 'year' : 'month'})
            </p>
            <p className='confirm-total-price'>
              ${totalPrice}/{time ? 'yr' : 'mo'}
            </p>
          </div>
        </div>
      </div>
      <button className='back-btn' onClick={() => setStep((i) => i - 1)}>
        Go Back
      </button>
      <button
        className='btn accent-btn'
        type='submit'
        onClick={() => setStep((i) => i + 1)}
      >
        Confirm
      </button>
    </div>
  )
}

export default Confirm
