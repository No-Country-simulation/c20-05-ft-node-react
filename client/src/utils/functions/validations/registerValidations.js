import { FORM_ERROR_VALUES } from "../../../assets/other-assets/errors-values"
import { hasEmailSpecialCharacters, hasNumbers, hasSpaces, isValidEmailFormat, isValidName } from "./extraValidations"

export const registerValidations = (form, setErrors) => {
  const errors = {}
  const { first_name, last_name, email, password, repeatPassword } = FORM_ERROR_VALUES

  if (form.first_name === '') errors.first_name = null
  else {
    if (form.first_name.trim().length < first_name.min) errors.first_name = `El nombre debe tener al menos ${first_name.min} caracteres`
    if (form.first_name.trim().length > first_name.max) errors.first_name = `El nombre debe tener menos de ${first_name.max} caracteres`
    if (hasNumbers(form.first_name)) errors.first_name = 'El nombre no puede contener números'
    if (!isValidName(form.first_name)) errors.first_name = 'El nombre no puede contener caracteres especiales'
    if (hasSpaces(form.first_name)) errors.first_name = 'El nombre no puede tener espacios'
  }

  if (form.last_name === '') errors.last_name = null
  else {
    if (form.last_name.trim().length < last_name.min) errors.last_name = `El apellido debe tener al menos ${last_name.min} caracteres`
    if (form.last_name.trim().length > last_name.max) errors.last_name = `El apellido debe tener menos de ${last_name.max} caracteres`
    if (hasNumbers(form.last_name)) errors.last_name = 'El apellido no puede contener números'
    if (!isValidName(form.last_name)) errors.last_name = 'El apellido no puede contener caracteres especiales'
    if (hasSpaces(form.last_name)) errors.last_name = 'El apellido no puede tener espacios'
  }

  if (form.email === '') errors.email = null
  else {
    if (form.email.trim().length < email.min) errors.email = `El email debe tener al menos ${email.min} caracteres`
    if (form.email.trim().length > email.max) errors.email = `El email debe tener menos de ${email.max} caracteres`
    if (!isValidEmailFormat(form.email)) errors.email = 'Formato de email incorrecto'
    if (hasEmailSpecialCharacters(form.email)) errors.email = 'No puede tener caracteres especiales, solo @ . _ -'
  }

  if (form.password === '') errors.password = null
  else {
    if (form.password.trim().length < password.min) errors.password = `La contraseña debe tener al menos ${password.min} caracteres`
    if (form.password.trim().length > password.max) errors.password = `La contraseña debe tener menos de ${password.max} caracteres`
  }

  if (form.repeatPassword === '') errors.repeatPassword = null
  else {
    if (form.repeatPassword.trim().length < repeatPassword.min) errors.repeatPassword = `La contraseña debe tener al menos ${repeatPassword.min} caracteres`
    if (form.repeatPassword.trim().length > repeatPassword.max) errors.repeatPassword = `La contraseña debe tener menos de ${repeatPassword.max} caracteres`
    if (form.password !== form.repeatPassword) errors.repeatPassword = 'Las contraseñas no coinciden'
  }

  if (Object.keys(errors).length === 0) setErrors(null)
  else setErrors(errors)
}