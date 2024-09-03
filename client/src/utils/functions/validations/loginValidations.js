import { FORM_ERROR_VALUES } from "../../../assets/other-assets/errors-values"
import { hasEmailSpecialCharacters, isValidEmailFormat } from "./extraValidations"

export const loginValidations = (form, setErrors) => {
  const errors = {}
  const { email, password } = FORM_ERROR_VALUES

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

  if (Object.keys(errors).length === 0) setErrors(null)
  else setErrors(errors)
}