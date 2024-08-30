import { useEffect, useState } from 'react'
import { FORM_STATES, INITIAL_SATATE_USER_INFO_INPUTS } from '../../assets/other-assets/constants/form-resources'
import { userInfoValidations } from '../functions/validations/userInfoValidations'

export const useUserInfo = () => {
  const [form, setForm] = useState(INITIAL_SATATE_USER_INFO_INPUTS)
  const [errors, setErrors] = useState(null)
  const [formState, setFormState] = useState(FORM_STATES)

  useEffect(() => userInfoValidations(form, setErrors), [form])
  useEffect(() => console.log(form), [form])

  return { form, setForm, errors, formState, setFormState }
}