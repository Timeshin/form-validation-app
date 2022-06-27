const emailValidation = (value: string) => {
  const regExpEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/gi

  return regExpEmail.test(value)
}

export default emailValidation
