import { useEffect, useState } from 'react'
import { faqFormValidations } from '../../utils/functions/validations/faqFormValidations'
import { INITIAL_SATATE_QUESTION_INPUTS } from '../../assets/other-assets/constants/form-resources'

export const useFaqForm = () => {
  const [form, setForm] = useState(INITIAL_SATATE_QUESTION_INPUTS)
  const [errors, setErrors] = useState(null)

  useEffect(() => faqFormValidations(form, setErrors), [form])

  return { form, setForm, errors }
}