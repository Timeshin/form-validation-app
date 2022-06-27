const phoneNumberValidation = (value: string) => {
  const regExpRussianNumber = /^(\+7|7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/

  return regExpRussianNumber.test(value)
}

export default phoneNumberValidation
