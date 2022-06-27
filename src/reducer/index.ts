import {
  dateOfBirthValidation,
  emailValidation,
  fullNameValidation,
  messageValidation,
  phoneNumberValidation,
} from 'helpers'
import {
  FormInputsActions,
  IFormInputsState,
  IFromValuesAction
} from 'interfaces/reducer'

export const initialState: IFormInputsState = {
  fullName: {
    value: '',
    isValid: true,
    actionType: FormInputsActions.SetFullName,
    validationCB: (value: string) => fullNameValidation(value),
  },
  email: {
    value: '',
    isValid: true,
    actionType: FormInputsActions.SetEmail,
    validationCB: (value: string) => emailValidation(value),
  },
  phoneNumber: {
    value: '',
    isValid: true,
    actionType: FormInputsActions.SetPhoneNumber,
    validationCB: (value: string) => phoneNumberValidation(value),
  },
  dateOfBirth: {
    value: '',
    isValid: true,
    actionType: FormInputsActions.SetDateOfBirth,
    validationCB: (value: string) => dateOfBirthValidation(value),
  },
  message: {
    value: '',
    isValid: true,
    actionType: FormInputsActions.SetMessage,
    validationCB: (value: string) => messageValidation(value),
  },
}

const formInputsReducer = (state: IFormInputsState, { type, payload }: IFromValuesAction) => {
  switch (type) {
    case FormInputsActions.SetFullName:
      return {
        ...state,
        fullName: payload
      }
    case FormInputsActions.SetEmail:
      return {
        ...state,
        email: payload
      }
    case FormInputsActions.SetPhoneNumber:
      return {
        ...state,
        phoneNumber: payload
      }
    case FormInputsActions.SetDateOfBirth:
      return {
        ...state,
        dateOfBirth: payload
      }
    case FormInputsActions.SetMessage:
      return {
        ...state,
        message: payload
      }
    case FormInputsActions.CleanForm:
      return state = initialState
    default:
      return {
        ...state
      }
  }
}

export default formInputsReducer
