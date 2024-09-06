import { FORM_ERROR_VALUES } from '../../../assets/other-assets/errors-values'
import ErrorForms from '../../ErrorsForms/ErrorForms'
import { useRegisterForm } from '../../../utils/hooks/useRegisterForm'
import { PATHS } from '../../../routes/routes'
import ButtonSubmit from '../../Global/ButtonSubmit'
import ProfileCreatedSuccessfully from '../../ProfileCreatedSuccessfully/ProfileCreatedSuccessfully'
import { handlerFormValues } from '../../../utils/functions/handlerFormValues'
import { handlerSubmitRegisterForm } from '../../../utils/functions/handlerSubmitRegisterForm'
import eyeIcon from '../../../assets/svg/eye-icon.svg'
import slashedEyeIcon from '../../../assets/svg/slashed-eye-icon.svg'

const RegisterForm = () => {
  const { form, setForm, errors, formState, setFormState, showPassword, setShowPassword } = useRegisterForm()
  const { first_name, last_name, email, password, repeatPassword } = FORM_ERROR_VALUES

  return (
    <>
      <div className={formState.isSent ? 'block' : 'hidden'}>
        <ProfileCreatedSuccessfully pathSkip={PATHS.home} pathGoTo={PATHS.userInfo} />
      </div>
      <form onSubmit={(e) => handlerSubmitRegisterForm(e, form, formState, setFormState, errors)} className="flex flex-col gap-8">
        <div className="flex flex-col w-full gap-4">
          <h2 className='font-medium text-lg'>Nombre y apellido</h2>
          <div className='flex max-md:flex-col gap-4 w-full [&>div>label]:mt-2 [&>div>label]:font-medium [&>div>input]:p-2 [&>div>input]:border-[1px] [&>div>input]:border-gray-light [&>div>label]:hidden [&>div>input]:rounded-lg'>
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="first_name-register">Nombre</label>
              <input onChange={(e) => handlerFormValues(e, setForm)} id='first_name-register' name='first_name' type="text" placeholder="Nombre" minLength={first_name.min} maxLength={first_name.max} value={form.first_name} />
              {
                errors && (<ErrorForms msgError={errors.first_name} />)
              }
            </div>
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="last_name-register">Apellido</label>
              <input onChange={(e) => handlerFormValues(e, setForm)} id='last_name-register' name='last_name' type="text" placeholder="Apellido" minLength={last_name.min} maxLength={last_name.max} value={form.last_name} />
              {
                errors && (<ErrorForms msgError={errors.last_name} />)
              }
            </div>
          </div>
          <p className='text-sm text-secondary-text'>Asegúrate que tu nombre coincida con el que figura en tu DNI. (Luego podrás elegir tu nombre preferido).</p>
        </div>
        <div className='flex flex-col gap-4 [&>label]:hidden [&>input]:p-2 [&>input]:border-[1px] [&>input]:border-gray-300 [&>input]:rounded-lg'>
          <h2 className='font-medium text-lg'>Correo y contraseña</h2>
          <label htmlFor="email-register">Correo electrónico</label>
          <input onChange={(e) => handlerFormValues(e, setForm)} id='email-register' name='email' autoComplete='username' type="email" placeholder="Correo electrónico" minLength={email.min} maxLength={email.max} value={form.email} />
          {
            errors && (<ErrorForms msgError={errors.email} />)
          }
          <div className='relative [&>label]:hidden [&>input]:p-2 [&>input]:border-[1px] [&>input]:border-gray-300 [&>input]:rounded-lg [&>input]:w-full'>
            <label htmlFor="password-register">Contraseña</label>
            <input onChange={(e) => handlerFormValues(e, setForm)} id='password-register' name='password' autoComplete="new-password" type={!showPassword ? 'password' : 'text'} placeholder="Contraseña" minLength={password.min} maxLength={password.max} value={form.password} />
            <button onClick={() => setShowPassword(!showPassword)} className='absolute top-0 bottom-0 right-2' type='button'>
              <img src={!showPassword ? eyeIcon : slashedEyeIcon } alt={!showPassword ? 'mostrar contraseña' : 'ocultar contraseña'} />
            </button>
          </div>
          {
            errors && (<ErrorForms msgError={errors.password} />)
          }
          <div className='relative [&>label]:hidden [&>input]:p-2 [&>input]:border-[1px] [&>input]:border-gray-300 [&>input]:rounded-lg [&>input]:w-full'>
            <label htmlFor="repeat-password-register">Confirmar contraseña</label>
            <input onChange={(e) => handlerFormValues(e, setForm)} id='repeat-password-register' name='repeatPassword' autoComplete="new-password" type={!showPassword ? 'password' : 'text'} placeholder="Confirmar contraseña" minLength={repeatPassword.min} maxLength={repeatPassword.max} value={form.repeatPassword} />
            <button onClick={() => setShowPassword(!showPassword)} className='absolute top-0 bottom-0 right-2' type='button'>
              <img src={!showPassword ? eyeIcon : slashedEyeIcon } alt={!showPassword ? 'mostrar contraseña' : 'ocultar contraseña'} />
            </button>
          </div>
          {
            errors && (<ErrorForms msgError={errors.repeatPassword} />)
          }
        </div>
        <ButtonSubmit disabled={errors && Object.keys(errors).length !== 0}>{!formState.isLoading ? 'Continuar' : 'Cargando...'}</ButtonSubmit>
      </form>
    </>
  )
}

export default RegisterForm