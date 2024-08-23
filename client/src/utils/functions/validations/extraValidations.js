export const hasNumbers = (textToCheck) => /\d/.test(textToCheck)
export const isValidName = (textToCheck) => /^[a-zA-Z0-9áéíóúÁÉÍÓÚüÜñÑ\s]+$/.test(textToCheck)
export const hasEmailSpecialCharacters = (emailToCheck) => !/^[a-zA-Z0-9.@]+$/.test(emailToCheck)
export const isValidEmailFormat = (emailToCheck) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailToCheck)