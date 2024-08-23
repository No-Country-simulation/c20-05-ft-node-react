import { useEffect, useState } from 'react'
import { INITIAL_SATATE_INPUTS } from '../../assets/other-assets/form-resources'
import { registerValidations } from '../../utils/functions/validations/registerValidations'

export const useRegisterForm = () => {
  const [form, setForm] = useState(INITIAL_SATATE_INPUTS)
  const [errors, setErrors] = useState(null)

  useEffect(() => registerValidations(form, setErrors), [form])

  return { form, setForm, errors }
}