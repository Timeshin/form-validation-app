export interface ISendFormReq {
  FullName: string
  Email: string
  PhoneNumber: string
  dateOfBirth: string
  message: string
}

type responseDataType = ISendFormReq & { id: number }

export interface ISendFormResp extends Response {
  data: responseDataType
}
