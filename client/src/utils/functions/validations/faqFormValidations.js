import { FORM_ERROR_VALUES } from '../../../assets/other-assets/errors-values'
import { hasNumbers, isValidName, isValidEmailFormat, hasEmailSpecialCharacters, hasTwoOrMoreSpaces } from './extraValidations'

export const faqFormValidations = (form, setErrors) => {
  const errors = {}
  const { full_name, email, question } = FORM_ERROR_VALUES

  if (form.full_name === '') errors.full_name = null
  else {
    if (form.full_name.trim().length < full_name.min) errors.full_name = `El nombre debe tener al menos ${full_name.min} caracteres`
    if (form.full_name.trim().length > full_name.max) errors.full_name = `El nombre debe tener menos de ${full_name.max} caracteres`
    if (hasNumbers(form.full_name)) errors.full_name = 'El nombre no puede contener números'
    if (!isValidName(form.full_name)) errors.full_name = 'El nombre no puede contener caracteres especiales'
    if (hasTwoOrMoreSpaces(form.full_name)) errors.full_name = 'No puede tener dos o más espacios seguidos'
  }

  if (form.email === '') errors.email = null
  else {
    if (form.email.trim().length < email.min) errors.email = `El email debe tener al menos ${email.min} caracteres`
    if (form.email.trim().length > email.max) errors.email = `El email debe tener menos de ${email.max} caracteres`
    if (!isValidEmailFormat(form.email)) errors.email = 'Formato de email incorrecto'
    if (hasEmailSpecialCharacters(form.email)) errors.email = 'No puede tener caracteres especiales, solo @ . _ -'
  }

  if (form.question === '') errors.question = null
  else {
    if (form.question.trim().length < question.min) errors.question = `La pregunta debe tener al menos ${question.min} caracteres`
    if (form.question.trim().length > question.max) errors.question = `La pregunta debe tener menos de menos ${question.max} caracteres`
  }

  if (Object.keys(errors).length === 0) setErrors(null)
  else setErrors(errors)
}