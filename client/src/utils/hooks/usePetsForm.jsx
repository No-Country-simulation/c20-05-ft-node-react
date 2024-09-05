import { useEffect, useState } from 'react'
import { FORM_STATES, INITIAL_SATATE_PETS_FORM_INPUTS } from '../../assets/other-assets/constants/form-resources'
import { petsFormValidations } from '../functions/validations/petsFormValidations'
import { EXTRA_INPUTS } from '../../assets/other-assets/constants/pets-form-resources'
import { useDispatch, useSelector } from 'react-redux'
import { addPetForm } from '../../state/store/slices/pets/pet-form'

export const usePetsForm = (uid) => {
  const dispatch = useDispatch()
  const formPetsList = useSelector((state) => state.petForm)

  useEffect(() => console.log(formPetsList), [formPetsList])

  const [form, setForm] = useState(INITIAL_SATATE_PETS_FORM_INPUTS)
  const [errors, setErrors] = useState(null)
  const [formState, setFormState] = useState(FORM_STATES)
  const [extraInputs, setExtraInputs] = useState(EXTRA_INPUTS)

  // useEffect(() => petsFormValidations(form, setErrors, extraInputs), [form])
  useEffect(() => {
    petsFormValidations(form, setErrors, extraInputs)
    dispatch(addPetForm({ uid, form }))
  }, [form])
  useEffect(() => console.log(form), [form])
  useEffect(() => console.log(errors), [errors])

  return { form, setForm, errors, formState, setFormState, extraInputs, setExtraInputs }
}