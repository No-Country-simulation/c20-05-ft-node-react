import { useEffect, useState } from 'react'
import { FORM_STATES, INITIAL_SATATE_PETS_FORM_INPUTS } from '../../assets/other-assets/constants/form-resources'
import { petsFormValidations } from '../functions/validations/petsFormValidations'
import { EXTRA_INPUTS } from '../../assets/other-assets/constants/pets-form-resources'
import { useDispatch, useSelector } from 'react-redux'
import { addErrors, addExtraInputs } from '../../state/store/slices/pets/pet-form-slice'

export const usePetsForm = (petNumber) => {
  const dispatch = useDispatch()
  const formPetsList = useSelector((state) => state.petForm)

  useEffect(() => {
    console.log('petForms', formPetsList.forms)
    console.log('errors', formPetsList.errors)
  }, [formPetsList])

  useEffect(() => {
    console.log('formPetsList.forms[petNumber]', formPetsList.forms[petNumber])
  }, [])

  const [form, setForm] = useState(formPetsList.forms[petNumber] || INITIAL_SATATE_PETS_FORM_INPUTS)
  const [errors, setErrors] = useState(null)
  const [formState, setFormState] = useState(FORM_STATES)
  const [extraInputs, setExtraInputs] = useState(formPetsList.extraInputs[petNumber] || EXTRA_INPUTS)

  // useEffect(() => petsFormValidations(form, setErrors, extraInputs), [form])
  useEffect(() => {
    petsFormValidations(form, setErrors, extraInputs)
    // dispatch(addPetForm({ petNumber, form }))
  }, [form])
  useEffect(() => {
    const errorsLength = errors ? Object.keys(errors).length : 0

    console.log('errorsLength', errorsLength)

    dispatch(addErrors(errorsLength))
    console.log(errors && Object.keys(errors))
  }, [errors])

  useEffect(() => {
    dispatch(addExtraInputs({ petNumber, extraInputs }))
  }, [extraInputs])
  // useEffect(() => console.log(errors), [errors])
  // useEffect(() => console.log(form), [form])

  return { form, setForm, errors, setErrors, formState, setFormState, extraInputs, setExtraInputs }
}