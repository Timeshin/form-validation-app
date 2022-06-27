const fullNameValidation = (value: string) => {
  const regExpFullName = /^([a-zA-Z])+ ([a-zA-Z])+$/
  const firstNameValid = value.split(' ')[0]?.length <= 30 && value.split(' ')[0]?.length >= 3
  const lastName = value.split(' ')[1]?.length <= 30 && value.split(' ')[1]?.length >= 3

  return regExpFullName.test(value) && firstNameValid && lastName
}

export default fullNameValidation
