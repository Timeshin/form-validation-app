import React, { ChangeEvent, FocusEvent, memo } from 'react'
import { InputProps } from 'interfaces/components/UI'

import classes from './style.module.scss'

const Input = ({
  item,
  dispatch,
  ...props
}: InputProps) => {
  const { value, isValid, validationCB, actionType } = item

  const onChangeHandler = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    if(!isValid) {
      dispatch({ type: actionType, payload: { ...item, value: value, isValid: validationCB(value) }})
      return
    }

    dispatch({ type: actionType, payload: { ...item, value: value } })
  }

  const onBlurHandler = ({ target: { value } }: FocusEvent<HTMLInputElement>) => {
    if(value.trim().length < 0) {
      dispatch({ type: actionType, payload: { ...item, isValid: false } })
    }
    if(validationCB(value)) return

    dispatch({ type: actionType, payload: { ...item, isValid: false } })
  }

  return (
    <div className={classes.inputWrapper}>
      <input
        onBlur={onBlurHandler}
        onChange={onChangeHandler}
        value={value}
        className={`${classes.formInput} ${!isValid && classes.error}`}
        {...props}
      />
      {
        !isValid && <span className={classes.errorText}>Invalid value</span>
      }
    </div>
  )
}

export default memo(Input)