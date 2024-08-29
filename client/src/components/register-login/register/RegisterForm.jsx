import { FORM_ERROR_VALUES } from '../../../assets/other-assets/errors-values'
import ErrorForms from '../../ErrorsForms/ErrorForms'
import { handlerRegisterLoginForm } from '../../../utils/functions/handlerRegisterLoginForm'
import { useRegisterForm } from '../../../utils/hooks/useRegisterForm'
import { handlerSubmitForm } from '../../../utils/functions/handlerSubmitForm'
import { API_PATH_REGISTER } from '../../../routes/routes'
import ButtonSubmit from '../../Global/ButtonSubmit'

const RegisterForm = () => {
  const { form, setForm, errors } = useRegisterForm()
  const { name, surname, email, password, repeatPassword } = FORM_ERROR_VALUES

  return (
    <form onSubmit={(e) => handlerSubmitForm(e, form, API_PATH_REGISTER, errors)} className="flex flex-col gap-8">
      <div className="flex flex-col w-full gap-4">
        <h2 className='font-medium text-lg'>Nombre y apellido</h2>
        <div className='flex max-md:flex-col gap-4 w-full [&>div>label]:mt-2 [&>div>label]:font-medium [&>div>input]:p-2 [&>div>input]:border-[1px] [&>div>input]:border-gray-light [&>div>label]:hidden [&>div>input]:rounded-lg'>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="name-register">Nombre</label>
            <input onChange={(e) => handlerRegisterLoginForm(e, setForm)} id='name-register' name='name' type="text" placeholder="Nombre" minLength={name.min} maxLength={name.max} value={form.name} />
            {
              errors && (<ErrorForms msgError={errors.name} />)
            }
          </div>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="surname-register">Apellido</label>
            <input onChange={(e) => handlerRegisterLoginForm(e, setForm)} id='surname-register' name='surname' type="text" placeholder="Apellido" minLength={surname.min} maxLength={surname.max} value={form.surname} />
            {
              errors && (<ErrorForms msgError={errors.surname} />)
            }
          </div>
        </div>
        <p className='text-sm text-secondary-text'>Asegúrate que tu nombre coincida con el que figura en tu DNI. (Luego podrás elegir tu nombre preferido).</p>
      </div>
      <div className='flex flex-col gap-4 [&>label]:hidden [&>input]:p-2 [&>input]:border-[1px] [&>input]:border-gray-300 [&>input]:rounded-lg'>
        <h2 className='font-medium text-lg'>Correo y contraseña</h2>
        <label htmlFor="email-register">Correo electrónico</label>
        <input onChange={(e) => handlerRegisterLoginForm(e, setForm)} id='email-register' name='email' autoComplete='username' type="email" placeholder="Correo electrónico" minLength={email.min} maxLength={email.max} value={form.email} />
        {
          errors && (<ErrorForms msgError={errors.email} />)
        }
        <label htmlFor="password-register">Contraseña</label>
        <input onChange={(e) => handlerRegisterLoginForm(e, setForm)} id='password-register' name='password' autoComplete="new-password" type="password" placeholder="Contraseña" minLength={password.min} maxLength={password.max} value={form.password} />
        {
          errors && (<ErrorForms msgError={errors.password} />)
        }
        <label htmlFor="repeat-password-register">Confirmar contraseña</label>
        <input onChange={(e) => handlerRegisterLoginForm(e, setForm)} id='repeat-password-register' name='repeatPassword' autoComplete="new-password" type="password" placeholder="Confirmar contraseña" minLength={repeatPassword.min} maxLength={repeatPassword.max} value={form.repeatPassword} />
        {
          errors && (<ErrorForms msgError={errors.repeatPassword} />)
        }
      </div>
      <ButtonSubmit disabled={errors && Object.keys(errors).length !== 0}>Continuar</ButtonSubmit>
    </form>
  )
}

export default RegisterForm