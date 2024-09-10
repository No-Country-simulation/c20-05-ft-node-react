import { useEffect, useState } from 'react'
import { FORM_STATES } from '../../assets/other-assets/constants/form-resources'
import { petsFormValidations } from '../functions/validations/petsFormValidations'
import { useDispatch, useSelector } from 'react-redux'
import { addErrors } from '../../state/store/slices/pets/pet-form-slice'

export const usePetsForm = (petNumber) => {
  const dispatch = useDispatch()
  const formPetsList = useSelector((state) => state.petForm)
  const form = formPetsList.forms[petNumber]
  const extraInputs = formPetsList.extraInputs[petNumber]
  const [errors, setErrors] = useState(null)
  const [formState, setFormState] = useState(FORM_STATES)

  useEffect(() => petsFormValidations(form, setErrors, extraInputs), [form])
  useEffect(() => {
    const errorsLength = errors ? Object.keys(errors).length : 0
    dispatch(addErrors(errorsLength))
  }, [errors])

  return { form, errors, setErrors, formState, setFormState, extraInputs }
}