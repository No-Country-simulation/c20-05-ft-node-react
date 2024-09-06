import { useEffect, useState } from 'react'
import { FORM_STATES, INITIAL_SATATE_REGISTER_INPUTS } from '../../assets/other-assets/constants/form-resources'
import { registerValidations } from '../functions/validations/registerValidations'

export const useRegisterForm = () => {
  const [form, setForm] = useState(INITIAL_SATATE_REGISTER_INPUTS)
  const [errors, setErrors] = useState(null)
  const [formState, setFormState] = useState(FORM_STATES)
  const [showPassword, setShowPassword] = useState(false)

  useEffect(() => registerValidations(form, setErrors), [form])

  return { form, setForm, errors, formState, setFormState, showPassword, setShowPassword }
}