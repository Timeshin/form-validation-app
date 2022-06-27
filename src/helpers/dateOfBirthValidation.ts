const dateOfBirthValidation = (value: string) => {
  const currentDate = new Date()
  const selectedDate = new Date(value)
  const differenceInYears = currentDate.getFullYear() - selectedDate.getFullYear()

  const isUserFromFuture = currentDate <= selectedDate
  const isValidAge = differenceInYears >= 0 && differenceInYears <= 100
  
  return !isUserFromFuture && isValidAge
}

export default dateOfBirthValidation
