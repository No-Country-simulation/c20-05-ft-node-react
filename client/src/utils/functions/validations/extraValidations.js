export const hasNumbers = (textToCheck) => /\d/.test(textToCheck)
export const isValidName = (textToCheck) => /^[a-zA-Z0-9áéíóúÁÉÍÓÚüÜñÑ\s]+$/.test(textToCheck)
export const hasEmailSpecialCharacters = (emailToCheck) => !/^[a-zA-Z0-9.@_-]+$/.test(emailToCheck)
export const isValidEmailFormat = (emailToCheck) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailToCheck)
export const hasTwoOrMoreSpaces = (textToCheck) => /\s{2,}/.test(textToCheck)
export const hasErrors = (errors) => errors && Object.keys(errors).length !== 0
export const hasSpaces = (textToCheck) => /\s/.test(textToCheck)
export const isValidValue = (valueToCheck, arrayToSearch) => arrayToSearch.includes(valueToCheck)
export const getAge = (dateToCheck) => {
  const date = new Date(dateToCheck)
  const today = new Date()
  const day = today.getDate() - date.getDate()
  const month = today.getMonth() - date.getMonth()
  const age = today.getFullYear() - date.getFullYear()
  console.log('age', age)
  if (month < 0 || (month === 0 && day)) return age - 1
  return age
}
export const isPlural = (valueToCheck) => { valueToCheck !== 1 ? 's' : '' }