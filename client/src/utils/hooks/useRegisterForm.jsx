import { useEffect, useState } from 'react'
import { INITIAL_SATATE_REGISTER_INPUTS } from '../../assets/other-assets/constants/form-resources'
import { registerValidations } from '../functions/validations/registerValidations'

export const useRegisterForm = () => {
  const [form, setForm] = useState(INITIAL_SATATE_REGISTER_INPUTS)
  const [errors, setErrors] = useState(null)

  useEffect(() => registerValidations(form, setErrors), [form])

  return { form, setForm, errors }
}