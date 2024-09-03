import { FORM_ERROR_VALUES } from '../../../assets/other-assets/errors-values'
import ErrorForms from '../../ErrorsForms/ErrorForms'
import { useLoginForm } from '../../../utils/hooks/useLoginForm'
import { handlerSubmitForm } from '../../../utils/functions/handlerSubmitForm'
import { API_PATH_LOGIN } from '../../../routes/routes'
import ButtonSubmit from '../../Global/ButtonSubmit'
import { handlerFormValues } from '../../../utils/functions/handlerFormValues'

const LoginForm = () => {
  const { form, setForm, errors } = useLoginForm()
  const { email, password } = FORM_ERROR_VALUES

  return (
    <form onSubmit={(e) => handlerSubmitForm(e, form, API_PATH_LOGIN, errors)} className="flex flex-col gap-8">
      <div className='flex flex-col gap-4 [&>label]:hidden [&>input]:p-2 [&>input]:border-2 [&>input]:border-gray-300 [&>input]:rounded-lg'>
        <h2 className='font-medium text-lg'>Correo y contraseña</h2>
        <label htmlFor="email-login">Correo electrónico</label>
        <input onChange={(e) => handlerFormValues(e, setForm)} id='email-login' name='email' autoComplete='username' type="email" placeholder="Correo electrónico" minLength={email.min} maxLength={email.max} value={form.email} />
        {
          errors && (<ErrorForms msgError={errors.email} />)
        }
        <label htmlFor="password-login">Contraseña</label>
        <input onChange={(e) => handlerFormValues(e, setForm)} id='password-login' name='password' autoComplete="new-password" type="password" placeholder="Contraseña" minLength={password.min} maxLength={password.max} value={form.password} />
        {
          errors && (<ErrorForms msgError={errors.password} />)
        }
        <label htmlFor="checkbox-login" className='flex gap-2 items-center'>
          <input onChange={(e) => handlerFormValues(e, setForm)} type="checkbox" name="remember" id="checkbox-login" className='[&+span]:checked:font-semibold' />
          <span className='font-normal'>Recuérdame</span>
        </label>
      </div>
      <ButtonSubmit disabled={errors && Object.keys(errors).length !== 0}>Iniciar sesión</ButtonSubmit>
    </form>
  )
}

export default LoginForm