import { useEffect, useState } from 'react'
import { INITIAL_SATATE_INPUTS } from '../../assets/other-assets/faq-resources'
import { handleChange } from '../../utils/functions/handlerChangeFaqForm'
import { faqFormValidations } from '../../utils/functions/validations/faqFormValidations'
import ErrorForms from '../ErrorsForms/ErrorForms'
import { faqFormErrorsValues } from '../../assets/other-assets/errors-values'

const FaqForm = () => {
  const [form, setForm] = useState(INITIAL_SATATE_INPUTS)
  const [errors, setErrors] = useState(null)
  const { name, email, question } = faqFormErrorsValues

  useEffect(() => {
    faqFormValidations(form, setErrors)
  }, [form])

  return (
    <div className="min-w-[400px] bg-gray-400 flex flex-col gap-4 p-4">
      <h3 className="text-2xl text-white">!Preguntanos!</h3>
      <form action='#' method="POST" className="flex flex-col gap-4 [&>label]:text-white [&>input]:p-2 [&>textarea]:p-2">
        <label htmlFor="name-form-faq">Nombre y apellido</label>
        <input onChange={(e) => handleChange(e, setForm)} id='name-form-faq' required type="text" className='capitalize' placeholder="Ej: María López" minLength={name.min} maxLength={name.max} value={form.name} name='name'/>
        {
          errors && (<ErrorForms msgError={errors.name} />)
        }
        <label htmlFor="email-form-faq">Correo electrónico</label>
        <input onChange={(e) => handleChange(e, setForm)} id='email-form-faq' required type="email" placeholder="Ej: marialopez@gmail.com" minLength={email.min} maxLength={email.max} value={form.email} name='email'/>
        {
          errors && (<ErrorForms msgError={errors.email} />)
        }
        <label htmlFor="question-form-faq">Pregunta</label>
        <textarea onChange={(e) => handleChange(e, setForm)} id='question-form-faq' required className="min-h-[100px] max-h-[200px]" placeholder="Mi pregunta es..." minLength={question.min} maxLength={question.max} value={form.question} name='question'></textarea>
        {
          errors && (<ErrorForms msgError={errors.question} />)
        }
        <button type='submit' className="bg-slate-50 rounded-lg py-2 disabled:opacity-30" disabled={errors && Object.keys(errors).length !== 0}>Enviar</button>
      </form>
    </div>
  )
}

export default FaqForm