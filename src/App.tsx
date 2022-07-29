import React, { useReducer, useState, useMemo } from 'react'
import reducer, { initialState } from 'reducer'
import { ISendFormReq } from 'interfaces/services'
import { sendForm } from 'services/sendForm'

import { Input, Loader } from 'components'

import './styles/index.scss'
import { FormInputsActions } from 'interfaces/reducer'

const App = () => {
  const [status, setStatus] = useState<'done' | 'pending' | 'error' | null>(null)
  const [state, dispatch] = useReducer(reducer, initialState)
  const isFormValid = useMemo(() => {
    const stateValuesArray = Object.values(state)

    return stateValuesArray.every(({ isValid, value }) => isValid && value.length)
  }, [state])

  const sendFormHandler = () => {
    if(!isFormValid) return

    setStatus('pending')

    const bodyRequest: ISendFormReq = {
      FullName: state.fullName.value,
      dateOfBirth: state.dateOfBirth.value,
      Email: state.email.value,
      PhoneNumber: state.phoneNumber.value,
      message: state.message.value,
    }

    sendForm(bodyRequest)
      .catch(() => {
        setStatus('error')
      })
      .finally(() => {
        setStatus('done')
        dispatch({ type: FormInputsActions.CleanForm, payload: null })
      })
  }

  return (
    <div className='contact-us'>
      {
        status === 'pending' && <Loader/>
      }
      <div className='contact-us-title'>
        <h1>
          <span>Contact</span> us
        </h1>
      </div>
      <div className='contact-us-content'>
      <Input
        item={state.fullName}
        dispatch={dispatch}
        placeholder='full name'
        type='text'
        style={{ textTransform: 'uppercase' }}
      />
      <Input
        item={state.email}
        dispatch={dispatch}
        placeholder='email'
        type='text'
      />
      <Input
        item={state.phoneNumber}
        dispatch={dispatch}
        placeholder='phone number'
        type='number'
      />
      <Input
        item={state.dateOfBirth}
        dispatch={dispatch}
        type='date'
      />
      <Input
        item={state.message}
        dispatch={dispatch}
        placeholder='message'
        type='text'
      />
        <div className='contact-us-content-btn'>
          <button
            onClick={() => sendFormHandler()}
            disabled={status === 'pending'}
          >
            Send
          </button>
        </div>
      </div>
      {
       (status === 'done' || status === 'error') && (
          <div className={`status-messsage ${status === 'error' ? 'error-message' : 'success-message'}`}>
            <p>
              {
                status === 'error' && 'Something went wrong :('
              }
              {
                status === 'done' && 'Success'
              }
            </p>
          </div>
        )
      }
    </div>
  )
}

export default App
