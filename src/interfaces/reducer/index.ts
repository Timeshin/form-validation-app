export enum FormInputsActions {
  SetFullName = 'SetFullName',
  SetEmail = 'SetEmail',
  SetPhoneNumber = 'SetPhoneNumber',
  SetDateOfBirth = 'SetDateOfBirth',
  SetMessage = 'SetMessage',
  CleanForm = 'CleanFrom',
}

export interface IStateItemValue {
  value: string
  isValid: boolean
  actionType: FormInputsActions
  validationCB: (value: string) => boolean
}

export interface IFromValuesAction {
  type: FormInputsActions
  payload: IStateItemValue
}

export interface IFormInputsState {
  fullName: IStateItemValue
  email: IStateItemValue
  phoneNumber: IStateItemValue
  dateOfBirth: IStateItemValue
  message: IStateItemValue
}
