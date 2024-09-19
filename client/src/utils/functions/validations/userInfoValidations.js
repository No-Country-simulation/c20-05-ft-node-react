import { FORM_ERROR_VALUES } from "../../../assets/other-assets/errors-values"
import { hasNumbers, hasSpaces, hasTwoOrMoreSpaces, getAge, isValidName } from "./extraValidations"

export const userInfoValidations = (form, setErrors) => {
  const errors = {}
  const { preferred_name, birthdate, province, city, address } = FORM_ERROR_VALUES

  if (form.preferred_name === '') errors.preferred_name = null
  else {
    if (form.preferred_name.trim().length < preferred_name.min) errors.preferred_name = `El nombre debe tener al menos ${preferred_name.min} caracteres`
    if (form.preferred_name.trim().length > preferred_name.max) errors.preferred_name = `El nombre debe tener menos de ${preferred_name.max} caracteres`
    if (hasNumbers(form.preferred_name)) errors.preferred_name = 'El nombre no puede contener números'
    if (!isValidName(form.preferred_name)) errors.preferred_name = 'El nombre no puede contener caracteres especiales'
    if (hasSpaces(form.preferred_name)) errors.preferred_name = 'El nombre no puede tener espacios'
  }

  if (form.birthdate === '') errors.birthdate = null
  else {
    if (getAge(form.birthdate) < birthdate.min) errors.birthdate = `Debes ser mayor de ${birthdate.min} años`
    if (getAge(form.birthdate) > birthdate.max) errors.birthdate = `El límite de edad es de ${birthdate.max} años`
  }

  if (form.province === '') errors.province = null
  else {
    if (form.province.trim().length < province.min) errors.province = `La provincia debe tener al menos ${province.min} caracteres`
    if (form.province.trim().length > province.max) errors.province = `La provincia debe tener menos de ${province.max} caracteres`
    if (hasNumbers(form.province)) errors.province = 'El provincia no puede contener números'
    if (!isValidName(form.province)) errors.province = 'El provincia no puede contener caracteres especiales'
    if (hasTwoOrMoreSpaces(form.province)) errors.province = 'El provincia no puede tener espacios'
  }

  if (form.city === '') errors.city = null
  else {
    if (form.city.trim().length < city.min) errors.city = `La ciudad debe tener al menos ${city.min} caracteres`
    if (form.city.trim().length > city.max) errors.city = `La ciudad debe tener menos de ${city.max} caracteres`
    if (hasNumbers(form.city)) errors.city = 'El ciudad no puede contener números'
    if (!isValidName(form.city)) errors.city = 'El ciudad no puede contener caracteres especiales'
    if (hasTwoOrMoreSpaces(form.city)) errors.city = 'El ciudad no puede tener espacios'
  }

  if (form.address === '') errors.address = null
  else {
    if (form.address.trim().length < address.min) errors.address = `La dirección debe tener al menos ${address.min} caracteres`
    if (form.address.trim().length > address.max) errors.address = `La dirección debe tener menos de ${address.max} caracteres`
    // if (hasNumbers(form.address)) errors.address = 'El dirección no puede contener números'
    if (!isValidName(form.address)) errors.address = 'El dirección no puede contener caracteres especiales'
    if (hasTwoOrMoreSpaces(form.address)) errors.address = 'El dirección no puede tener espacios'
  }

  if (Object.keys(errors).length === 0) setErrors(null)
  else setErrors(errors)
}