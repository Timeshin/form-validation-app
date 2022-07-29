import axios from 'axios'
import { ISendFormReq, ISendFormResp } from 'interfaces/services'

export const sendForm = async (body: ISendFormReq) => {
  const response = await axios.post<ISendFormReq, ISendFormResp>('https://notesapiheroku.herokuapp.com/api/notes', body)

  return response
}
