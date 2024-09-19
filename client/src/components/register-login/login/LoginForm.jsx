import { FORM_ERROR_VALUES } from '../../../assets/other-assets/errors-values'
import ErrorForms from '../../ErrorsForms/ErrorForms'
import { useLoginForm } from '../../../utils/hooks/useLoginForm'
import { handlerSubmitForm } from '../../../utils/functions/handlerSubmitForm'
import { API_PATHS, PATHS } from '../../../routes/routes'
import ButtonSubmit from '../../Global/ButtonSubmit'
import { handlerFormValues } from '../../../utils/functions/handlerFormValues'
import { API_REQUEST_MSGS } from '../../../assets/other-assets/api-request-msgs'
import eyeIcon from '../../../assets/svg/eye-icon.svg'
import slashedEyeIcon from '../../../assets/svg/slashed-eye-icon.svg'
import { useDispatch } from 'react-redux'
import { setCurrentUser } from '../../../state/store/slices/users/users-slice'
import useNavigateHelper from '../../../utils/hooks/useNavigateHelper'

const LoginForm = () => {
  const { form, setForm, errors, showPassword, setShowPassword } = useLoginForm()
  const { email, password } = FORM_ERROR_VALUES
  const dispatch = useDispatch()
  const { navigateTo } = useNavigateHelper()

  const handleLogin = async (e) => {
    const { data, status, message } = await handlerSubmitForm(e, form, API_PATHS.login, API_REQUEST_MSGS.login, errors)
    console.log('data', data)
    console.log('message', message)
    console.log('status', status)
    // Por ahora se hace así hasta tener JWT en el backend  
    if (status !== 200 || !data?.user) return
    dispatch(setCurrentUser(data.user))
    navigateTo(PATHS.home)
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
        <div className='relative [&>label]:hidden [&>input]:p-2 [&>input]:border-[1px] [&>input]:border-gray-300 [&>input]:rounded-lg [&>input]:w-full'>
          <label className='hidden' htmlFor="password-login">Contraseña</label>
          <input onChange={(e) => handlerFormValues(e, setForm)} id='password-login' name='password' autoComplete="new-password" type={!showPassword ? 'password' : 'text'} placeholder="Contraseña" minLength={password.min} maxLength={password.max} value={form.password} />
          <button onClick={() => setShowPassword(!showPassword)} className='absolute top-0 bottom-0 right-2' type='button'>
            <img src={!showPassword ? eyeIcon : slashedEyeIcon} alt={!showPassword ? 'mostrar contraseña' : 'ocultar contraseña'} />
          </button>
        </div>
        {
          errors && (<ErrorForms msgError={errors.password} />)
        }
        <label htmlFor="checkbox-login" className='flex gap-2 items-center cursor-pointer'>
          <input onChange={(e) => handlerFormValues(e, setForm)} type="checkbox" name="remember" id="checkbox-login" className='[&+span]:checked:font-semibold cursor-pointer' />
          <span className='font-normal'>Recuérdame</span>
        </label>
      </div>
      <ButtonSubmit disabled={errors && Object.keys(errors).length !== 0}>Iniciar sesión</ButtonSubmit>
    </form>
  )
}

export default LoginForm