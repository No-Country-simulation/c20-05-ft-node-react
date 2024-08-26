import { useEffect, useState } from 'react'
import { INITIAL_SATATE_LOGIN_INPUTS } from '../../assets/other-assets/form-resources'
import { loginValidations } from '../functions/validations/loginValidations'

export const useLoginForm = () => {
  const [form, setForm] = useState(INITIAL_SATATE_LOGIN_INPUTS)
  const [errors, setErrors] = useState(null)

  useEffect(() => loginValidations(form, setErrors), [form])

  return { form, setForm, errors }
}