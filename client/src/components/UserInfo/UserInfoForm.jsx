import { FORM_ERROR_VALUES } from '../../assets/other-assets/errors-values'
import ErrorForms from '../ErrorsForms/ErrorForms'
import { handlerRegisterLoginForm } from '../../utils/functions/handlerRegisterLoginForm'
import { handlerSubmitForm } from '../../utils/functions/handlerSubmitForm'
import { API_PATH_LOGIN } from '../../routes/routes'
import ButtonSubmit from '../Global/ButtonSubmit'
import { useUserInfo } from '../../utils/hooks/useUserInfo'

const UserInfoForm = () => {
  const { form, setForm, errors } = useUserInfo()
  const { preferred_name, province, city, address } = FORM_ERROR_VALUES

  return (
    <form onSubmit={(e) => handlerSubmitForm(e, form, API_PATH_LOGIN, errors)} className="flex flex-col gap-8">
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-2 [&>label]:hidden [&>input]:p-2 [&>input]:border-2 [&>input]:border-gray-300 [&>input]:rounded-lg'>
          <h2 className='font-medium text-lg'>Nombre preferido</h2>
          <label htmlFor="preferred-name-user-info">Nombre preferido</label>
          <input onChange={(e) => handlerRegisterLoginForm(e, setForm)} id='preferred-name-user-info' name='preferred_name' type="text" placeholder="Nombre preferido" minLength={preferred_name.min} maxLength={preferred_name.max} value={form.preferred_name} />
          {
            errors && (<ErrorForms msgError={errors.preferred_name} />)
          }
        </div>
        <div className='flex flex-col gap-2 [&>label]:hidden [&>input]:p-2 [&>input]:border-2 [&>input]:border-gray-300 [&>input]:rounded-lg'>
          <h2 className='font-medium text-lg'>Fecha de nacimiento</h2>
          <label htmlFor="birthdate-user-info">Fecha de nacimiento</label>
          <input onChange={(e) => handlerRegisterLoginForm(e, setForm)} id='birthdate-user-info' name='birthdate' type="date" placeholder="Fecha de nacimiento" value={form.birthdate} />
          {
            errors && (<ErrorForms msgError={errors.birthdate} />)
          }
        </div>
        <div className='flex flex-col gap-2 [&>label]:hidden [&>input]:p-2 [&>input]:border-2 [&>input]:border-gray-300 [&>input]:rounded-lg'>
          <h2 className='font-medium text-lg'>Domicilio</h2>
          <label htmlFor="province-user-info">Provincia</label>
          <input onChange={(e) => handlerRegisterLoginForm(e, setForm)} id='province-user-info' name='province' type="text" placeholder="Provincia" minLength={province.min} maxLength={province.max} value={form.province} />
          {
            errors && (<ErrorForms msgError={errors.province} />)
          }
          <label htmlFor="city-user-info">Ciudad</label>
          <input onChange={(e) => handlerRegisterLoginForm(e, setForm)} id='city-user-info' name='city' type="text" placeholder="Ciudad" minLength={city.min} maxLength={city.max} value={form.city} />
          {
            errors && (<ErrorForms msgError={errors.city} />)
          }
          <label htmlFor="address-user-info">Dirección</label>
          <input onChange={(e) => handlerRegisterLoginForm(e, setForm)} id='address-user-info' name='address' type="text" placeholder="Dirección" minLength={address.min} maxLength={address.max} value={form.address} />
          {
            errors && (<ErrorForms msgError={errors.address} />)
          }
        </div>
      </div>
      <ButtonSubmit disabled={errors && Object.keys(errors).length !== 0}>Continuar</ButtonSubmit>
    </form>
  )
}

export default UserInfoForm