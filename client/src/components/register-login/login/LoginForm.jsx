import { FORM_ERROR_VALUES } from '../../../assets/other-assets/errors-values'
import ErrorForms from '../../ErrorsForms/ErrorForms'
import { useLoginForm } from '../../../utils/hooks/useLoginForm'
import { handlerSubmitForm } from '../../../utils/functions/handlerSubmitForm'
import { API_PATHS } from '../../../routes/routes'
import ButtonSubmit from '../../Global/ButtonSubmit'
import { handlerFormValues } from '../../../utils/functions/handlerFormValues'
import { API_REQUEST_MSGS } from '../../../assets/other-assets/api-request-msgs'

const LoginForm = () => {
  const { form, setForm, errors } = useLoginForm()
  const { email, password } = FORM_ERROR_VALUES

  const handleLogin = async (e) => {
    const { status, message } = await handlerSubmitForm(e, form, API_PATHS.login, API_REQUEST_MSGS.login, errors)
    console.log('message', message)
    console.log('status', status)    
  }

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-8">
      <div className='flex flex-col gap-4 [&>input]:p-2 [&>input]:border-2 [&>input]:border-gray-300 [&>input]:rounded-lg'>
        <h2 className='font-medium text-lg'>Correo y contraseña</h2>
        <label className='hidden' htmlFor="email-login">Correo electrónico</label>
        <input onChange={(e) => handlerFormValues(e, setForm)} id='email-login' name='email' autoComplete='username' type="email" placeholder="Correo electrónico" minLength={email.min} maxLength={email.max} value={form.email} />
        {
          errors && (<ErrorForms msgError={errors.email} />)
        }
        <label className='hidden' htmlFor="password-login">Contraseña</label>
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