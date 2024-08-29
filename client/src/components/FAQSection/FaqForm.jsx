import { handleChange } from '../../utils/functions/handlerChangeFaqForm'
import ErrorForms from '../ErrorsForms/ErrorForms'
import { FORM_ERROR_VALUES } from '../../assets/other-assets/errors-values'
import { useFaqForm } from '../../utils/hooks/useFaqForm'
import { API_PATH_SEND_QUESTION } from '../../routes/routes'
import { handlerSubmitForm } from '../../utils/functions/handlerSubmitForm'
import ButtonSubmit from '../Global/ButtonSubmit'

const FaqForm = () => {
  const { form, setForm, errors } = useFaqForm()
  const { name, email, question } = FORM_ERROR_VALUES

  return (
    <div className="min-[800px]:min-w-[400px] h-max flex flex-col gap-4 p-4 rounded-lg shadow-container">
      <h3 className="text-xl lg:text-2xl font-semibold">Envíanos tu pregunta</h3>
      <form onSubmit={(e) => handlerSubmitForm(e, form, API_PATH_SEND_QUESTION, errors)} className="flex flex-col gap-2 [&>label]:mt-2 [&>label]:font-medium [&>input]:p-2 [&>input]:border-2 [&>input]:border-gray-300 [&>input]:rounded-lg">
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
        <textarea onChange={(e) => handleChange(e, setForm)} id='question-form-faq' required className="min-h-[100px] max-h-[200px] p-2 border-2 border-gray-300 rounded-lg" placeholder="Mi pregunta es..." minLength={question.min} maxLength={question.max} value={form.question} name='question'></textarea>
        {
          errors && (<ErrorForms msgError={errors.question} />)
        }
        <ButtonSubmit disabled={errors && Object.keys(errors).length !== 0}>Enviar</ButtonSubmit>
      </form>
    </div>
  )
}

export default FaqForm