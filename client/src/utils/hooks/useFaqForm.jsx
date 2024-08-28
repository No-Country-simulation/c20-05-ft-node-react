import { useEffect, useState } from 'react'
import { INITIAL_SATATE_INPUTS } from '../../assets/other-assets/faq-resources'
import { faqFormValidations } from '../../utils/functions/validations/faqFormValidations'

export const useFaqForm = () => {
  const [form, setForm] = useState(INITIAL_SATATE_INPUTS)
  const [errors, setErrors] = useState(null)

  useEffect(() => faqFormValidations(form, setErrors), [form])

  return { form, setForm, errors }
}