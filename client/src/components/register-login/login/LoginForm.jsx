import { FORM_ERROR_VALUES } from '../../../assets/other-assets/errors-values'
import ErrorForms from '../../ErrorsForms/ErrorForms'
import { handlerRegisterLoginForm } from '../../../utils/functions/handlerRegisterLoginForm'
import { useLoginForm } from '../../../utils/hooks/useLoginForm'
import { handlerSubmitForm } from '../../../utils/functions/handlerSubmitForm'
import { API_PATH_LOGIN } from '../../../routes/routes'

const LoginForm = () => {
  const { form, setForm, errors } = useLoginForm()
  const { email, password } = FORM_ERROR_VALUES

  return (
    <form onSubmit={(e) => handlerSubmitForm(e, form, API_PATH_LOGIN, errors)} className="flex flex-col gap-4 flex-1 px-4 [&>input]:border-2 [&>input]:border-gray-300 [&>input]:rounded-md [&>input]:p-2">
      <label htmlFor="email-login">Correo electrónico</label>
      <input onChange={(e) => handlerRegisterLoginForm(e, setForm)} id='email-login' name='email' autoComplete='username' type="email" placeholder="Ej: marialopez@gmail.com" minLength={email.min} maxLength={email.max} value={form.email} />
      {
        errors && (<ErrorForms msgError={errors.email} />)
      }
      <label htmlFor="password-login">Contraseña</label>
      <input onChange={(e) => handlerRegisterLoginForm(e, setForm)} id='password-login' name='password' autoComplete="new-password" type="password" placeholder="Contraseña" minLength={password.min} maxLength={password.max} value={form.password} />
      {
        errors && (<ErrorForms msgError={errors.password} />)
      }
      <label htmlFor="checkbox-login" className='flex gap-2 items-center'>
        <input onChange={(e) => handlerRegisterLoginForm(e, setForm)} type="checkbox" name="remember" id="checkbox-login" className='[&+span]:checked:font-semibold' />
        <span>Recuérdame</span>
      </label>
      <button type="submit" className="bg-blue-500 text-white rounded-lg py-2 disabled:opacity-30" disabled={errors && Object.keys(errors).length !== 0}>Iniciar sesión</button>
    </form>
  )
}

export default LoginForm