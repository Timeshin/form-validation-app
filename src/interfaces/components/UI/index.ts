import { Dispatch, InputHTMLAttributes } from 'react'
import { IFromValuesAction, IStateItemValue } from "interfaces/reducer";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  item: IStateItemValue
  dispatch: Dispatch<IFromValuesAction>
}
