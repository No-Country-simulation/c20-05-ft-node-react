import { registerValues } from "../../../assets/other-assets/errors-values"
import { hasEmailSpecialCharacters, hasNumbers, isValidEmailFormat, isValidName } from "./extraValidations"

export const registerValidations = (form, setErrors) => {
  const errors = {}
  const { name, surname, email, password, repeatPassword } = registerValues

  if (form.name === '') errors.name = null
  else {
    if (form.name.trim().length < name.min) errors.name = `El nombre debe tener al menos ${name.min} caracteres`
    if (form.name.trim().length > name.max) errors.name = `El nombre debe tener menos de ${name.max} caracteres`
    if (hasNumbers(form.name)) errors.name = 'El nombre no puede contener números'
    if (!isValidName(form.name)) errors.name = 'El nombre no puede contener caracteres especiales'
  }

  if (form.surname === '') errors.surname = null
  else {
    if (form.surname.trim().length < surname.min) errors.surname = `El apellido debe tener al menos ${surname.min} caracteres`
    if (form.surname.trim().length > surname.max) errors.surname = `El apellido debe tener menos de ${surname.max} caracteres`
    if (hasNumbers(form.surname)) errors.surname = 'El apellido no puede contener números'
    if (!isValidName(form.surname)) errors.surname = 'El apellido no puede contener caracteres especiales'
  }

  if (form.email === '') errors.email = null
  else {
    if (form.email.trim().length < email.min) errors.email = `El email debe tener al menos ${email.min} caracteres`
    if (form.email.trim().length > email.max) errors.email = `El email debe tener menos de ${email.max} caracteres`
    if (!isValidEmailFormat(form.email)) errors.email = 'Formato de email incorrecto'
    if (hasEmailSpecialCharacters(form.email)) errors.email = 'No puede tener caracteres especiales, solo @ y .'
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