import axios from 'axios'
import { ISendFormReq } from 'interfaces/services'

export const sendForm = async (body: ISendFormReq) => {
  const response = await axios.post<ISendFormReq>('https://notesapiheroku.herokuapp.com/api/notes', body)

  return response
}
