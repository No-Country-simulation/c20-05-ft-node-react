import { faqFormErrorsValues } from '../../../assets/other-assets/errors-values'
import { hasNumbers, isValidName, isValidEmailFormat } from './extraValidations'

export const faqFormValidations = (form, setErrors) => {
  const errors = {}
  const { name, email, question } = faqFormErrorsValues

  if (form.name === '') errors.name = null
  else {
    if (form.name.trim().length < name.min) errors.name = `El nombre debe tener al menos ${name.min} caracteres`
    if (form.name.trim().length > name.max) errors.name = `El nombre debe tener menos de ${name.max} caracteres`
    if (hasNumbers(form.name)) errors.name = 'El nombre no puede contener números'
    if (!isValidName(form.name)) errors.name = 'El nombre no puede contener caracteres especiales'
  }

  if (form.email === '') errors.email = null
  else {
    if (form.email.trim().length < email.min) errors.email = `El email debe tener al menos ${email.min} caracteres`
    if (form.email.trim().length > email.max) errors.email = `El email debe tener menos de ${email.max} caracteres`
    if (!isValidEmailFormat(form.email)) errors.email = 'Formato de email incorrecto'
  }

  if (form.question === '') errors.question = null
  else {
    if (form.question.trim().length < question.min) errors.question = `La pregunta debe tener al menos ${question.min} caracteres`
    if (form.question.trim().length > question.max) errors.question = `La pregunta debe tener menos de menos ${question.max} caracteres`
  }

  if (Object.keys(errors).length === 0) setErrors(null)
  else setErrors(errors)
}