export const hasNumbers = (textToCheck) => /\d/.test(textToCheck)
export const isValidName = (textToCheck) => /^[a-zA-Z0-9áéíóúÁÉÍÓÚüÜñÑ\s]+$/.test(textToCheck)
export const hasEmailSpecialCharacters = (emailToCheck) => !/^[a-zA-Z0-9.@_-]+$/.test(emailToCheck)
export const isValidEmailFormat = (emailToCheck) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailToCheck)
export const hasTwoOrMoreSpaces = (textToCheck) => /\s{2,}/.test(textToCheck)
export const hasErrors = (errors) => errors && Object.keys(errors).length !== 0
export const hasSpaces = (textToCheck) => /\s/.test(textToCheck)