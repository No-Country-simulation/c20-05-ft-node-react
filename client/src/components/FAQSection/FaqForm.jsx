import ErrorForms from '../ErrorsForms/ErrorForms'
import { FORM_ERROR_VALUES } from '../../assets/other-assets/errors-values'
import { useFaqForm } from '../../utils/hooks/useFaqForm'
import { API_PATH_SEND_QUESTION } from '../../routes/routes'
import { handlerSubmitForm } from '../../utils/functions/handlerSubmitForm'
import ButtonSubmit from '../Global/ButtonSubmit'
import { handlerFormValues } from '../../utils/functions/handlerFormValues'

const FaqForm = () => {
  const { form, setForm, errors } = useFaqForm()
  const { full_name, email, question } = FORM_ERROR_VALUES

  return (
    <div className="min-[800px]:min-w-[400px] h-max flex flex-col gap-4 p-4 rounded-lg shadow-container">
      <h3 className="md:text-xl font-semibold">Envíanos tu pregunta</h3>
      <form onSubmit={(e) => handlerSubmitForm(e, form, API_PATH_SEND_QUESTION, errors)} className="flex flex-col gap-2 [&>label]:mt-2 [&>label]:font-medium [&>input]:p-2 [&>input]:border-2 [&>input]:border-gray-300 [&>input]:rounded-lg">
        <label htmlFor="full-name-form-faq">Nombre y apellido</label>
        <input onChange={(e) => handlerFormValues(e, setForm)} id='full-name-form-faq' required type="text" className='capitalize' placeholder="Nombre y apellido" minLength={full_name.min} maxLength={full_name.max} value={form.full_name} name='full_name'/>
        {
          errors && (<ErrorForms msgError={errors.full_name} />)
        }
        <label htmlFor="email-form-faq">Correo electrónico</label>
        <input onChange={(e) => handlerFormValues(e, setForm)} id='email-form-faq' required type="email" placeholder="Correo electrónico" minLength={email.min} maxLength={email.max} value={form.email} name='email'/>
        {
          errors && (<ErrorForms msgError={errors.email} />)
        }
        <label htmlFor="question-form-faq">Pregunta</label>
        <textarea onChange={(e) => handlerFormValues(e, setForm)} id='question-form-faq' required className="min-h-[100px] max-h-[200px] p-2 border-2 border-gray-300 rounded-lg outline-none" placeholder="Mi pregunta es..." minLength={question.min} maxLength={question.max} value={form.question} name='question'></textarea>
        {
          errors && (<ErrorForms msgError={errors.question} />)
        }
        <ButtonSubmit disabled={errors && Object.keys(errors).length !== 0}>Enviar</ButtonSubmit>
      </form>
    </div>
  )
}

export default FaqForm