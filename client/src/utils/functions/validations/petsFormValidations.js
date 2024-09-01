import { FORM_ERROR_VALUES } from "../../../assets/other-assets/errors-values"
import { hasNumbers, hasSpaces, hasTwoOrMoreSpaces, isValidName } from "./extraValidations"

export const petsFormValidations = (form, setErrors, extraInputs) => {
  const errors = {}
  const { pet_name, pet_type, pet_pathologies, pet_medication } = FORM_ERROR_VALUES

  if (form.name === '') errors.name = null
  else {
    if (form.name.trim().length < pet_name.min) errors.name = `El nombre debe tener al menos ${pet_name.min} caracteres`
    if (form.name.trim().length > pet_name.max) errors.name = `El nombre debe tener menos de ${pet_name.max} caracteres`
    if (hasNumbers(form.name)) errors.name = 'El nombre no puede contener números'
    if (!isValidName(form.name)) errors.name = 'El nombre no puede contener caracteres especiales'
    if (hasSpaces(form.name)) errors.name = 'El nombre no puede tener espacios'
  }

  // if (form.type === '' && extraInputs.type) errors.type = null
  // else {
    if (form.type.trim().length < pet_type.min) errors.type = `El tipo debe tener al menos ${pet_type.min} caracteres`
    if (form.type.trim().length > pet_type.max) errors.type = `El tipo debe tener menos de ${pet_type.max} caracteres`
    if (form.type.trim() === 'Otro' || form.type.trim() === '') errors.type = 'Escribí el tipo de mascota'
    if (form.type.trim() !== '' && !isValidName(form.type)) errors.type = 'El tipo no puede contener caracteres especiales'
    if (hasNumbers(form.type)) errors.type = 'El tipo no puede contener números'
    if (hasSpaces(form.type)) errors.type = 'El tipo no puede tener espacios'
  // }
  // if (form.preferred_name === '') errors.preferred_name = null
  // else {
  //   if (form.preferred_name.trim().length < preferred_name.min) errors.preferred_name = `El nombre debe tener al menos ${preferred_name.min} caracteres`
  //   if (form.preferred_name.trim().length > preferred_name.max) errors.preferred_name = `El nombre debe tener menos de ${preferred_name.max} caracteres`
  //   if (hasNumbers(form.preferred_name)) errors.preferred_name = 'El nombre no puede contener números'
  //   if (!isValidName(form.preferred_name)) errors.preferred_name = 'El nombre no puede contener caracteres especiales'
  //   if (hasSpaces(form.preferred_name)) errors.preferred_name = 'El nombre no puede tener espacios'
  // }

  // if (form.preferred_name === '') errors.preferred_name = null
  // else {
  //   if (form.preferred_name.trim().length < preferred_name.min) errors.preferred_name = `El nombre debe tener al menos ${preferred_name.min} caracteres`
  //   if (form.preferred_name.trim().length > preferred_name.max) errors.preferred_name = `El nombre debe tener menos de ${preferred_name.max} caracteres`
  //   if (hasNumbers(form.preferred_name)) errors.preferred_name = 'El nombre no puede contener números'
  //   if (!isValidName(form.preferred_name)) errors.preferred_name = 'El nombre no puede contener caracteres especiales'
  //   if (hasSpaces(form.preferred_name)) errors.preferred_name = 'El nombre no puede tener espacios'
  // }

  if (form.pathologies !== '' || form.pathologies === '' && extraInputs.pathologies_description) {
    if (form.pathologies.trim().length < pet_pathologies.min) errors.pathologies = `Escribí al menos ${pet_pathologies.min} caracteres`
    if (form.pathologies.trim().length > pet_pathologies.max) errors.pathologies = `Escribí menos de ${pet_pathologies.max} caracteres`
    if (form.pathologies.trim() === '' && extraInputs.pathologies_description) errors.pathologies = 'Completá este campo'
    if (hasTwoOrMoreSpaces(form.pathologies)) errors.pathologies = 'No puede tener dos o más espacios seguidos'
    // if (form.pathologies.trim() !== '' && extraInputs.pathologies_description && !isValidName(form.pathologies)) errors.pathologies = 'Este campo no puede contener caracteres especiales'
  }

  if (form.medication !== '' || form.medication === '' && extraInputs.medication_descriptiom) {
    if (form.medication.trim().length < pet_medication.min) errors.medication = `Escribí al menos ${pet_medication.min} caracteres`
    if (form.medication.trim().length > pet_medication.max) errors.medication = `Escribí menos de ${pet_medication.max} caracteres`
    if (form.medication.trim() === '' && extraInputs.medication_description) errors.medication = 'Completá este campo'
    if (hasTwoOrMoreSpaces(form.medication)) errors.medication = 'No puede tener dos o más espacios seguidos'
    // if (form.medication.trim() !== '  && extraInputs.medication_description && !isValidName(form.medication)) errors.medication = 'Este campo no puede contener caracteres especiales'
    // if (!isValidName(form.medication)) errors.medication = 'No puede contener caracteres especiales'
  }

  if (Object.keys(errors).length === 0) setErrors(null)
  else setErrors(errors)
}