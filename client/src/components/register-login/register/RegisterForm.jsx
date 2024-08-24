import { FORM_ERROR_VALUES } from '../../../assets/other-assets/errors-values'
import ErrorForms from '../../ErrorsForms/ErrorForms'
import { handlerRegisterLoginForm } from '../../../utils/functions/handlerRegisterLoginForm'
import { useRegisterForm } from '../../../utils/hooks/useRegisterForm'
import { handlerSubmitForm } from '../../../utils/functions/handlerSubmitForm'
import { API_PATH_REGISTER } from '../../../routes/routes'

const RegisterForm = () => {
  const { form, setForm, errors } = useRegisterForm()
  const { name, surname, email, password, repeatPassword } = FORM_ERROR_VALUES

  return (
    <form onSubmit={(e) => handlerSubmitForm(e, form, API_PATH_REGISTER, errors)} className="flex flex-col gap-4 flex-1 px-4 [&>input]:border-2 [&>input]:border-gray-300 [&>input]:rounded-md [&>input]:p-2">
      <div className="flex items-center gap-4 [&>div>input]:border-2 [&>div>input]:border-gray-300 [&>div>input]:rounded-md [&>div>input]:p-2">
        <div className="flex flex-col flex-1 gap-4">
          <label htmlFor="name-register">Nombre</label>
          <input onChange={(e) => handlerRegisterLoginForm(e, setForm)} id='name-register' name='name' type="text" placeholder="Ej: María" minLength={name.min} maxLength={name.max} value={form.name} />
        </div>
        <div className="flex flex-col flex-1 gap-4">
          <label htmlFor="surname-register">Apellido</label>
          <input onChange={(e) => handlerRegisterLoginForm(e, setForm)} id='surname-register' name='surname' type="text" placeholder="Ej: López" minLength={surname.min} maxLength={surname.max} value={form.surname} />
        </div>
      </div>
      {
        errors && (<ErrorForms msgError={errors.name} />)
      }
      {
        errors && (<ErrorForms msgError={errors.surname} />)
      }
      <label htmlFor="email-register">Correo electrónico</label>
      <input onChange={(e) => handlerRegisterLoginForm(e, setForm)} id='email-register' name='email' autoComplete='username' type="email" placeholder="Ej: marialopez@gmail.com" minLength={email.min} maxLength={email.max} value={form.email} />
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
      <button type="submit" className="bg-blue-500 text-white rounded-lg py-2 disabled:opacity-30" disabled={errors && Object.keys(errors).length !== 0}>Registrarse</button>
    </form>
  )
}

export default RegisterForm