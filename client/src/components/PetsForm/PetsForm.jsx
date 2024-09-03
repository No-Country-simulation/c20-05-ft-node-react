import { FORM_ERROR_VALUES } from '../../assets/other-assets/errors-values'
import ErrorForms from '../ErrorsForms/ErrorForms'
import { handlerSubmitForm } from '../../utils/functions/handlerSubmitForm'
import { API_PATH_LOGIN, PATHS } from '../../routes/routes'
import ButtonGoTo from '../Global/ButtonGoTo'
import ButtonSubmit from '../Global/ButtonSubmit'
import { handlerFormValues } from '../../utils/functions/handlerFormValues'
import { PET_AGE, PET_HAS_MEDICATION, PET_HAS_PATHOLOGIES, PET_TYPES, PET_WEIGHTS } from '../../assets/other-assets/constants/pets-form-resources'
import { usePetsForm } from '../../utils/hooks/usePetsForm'

const PetsForm = () => {
  const { form, setForm, errors, extraInputs, setExtraInputs } = usePetsForm()
  const { pet_name, pet_type, pet_pathologies, pet_medication } = FORM_ERROR_VALUES

  const handleChangeOptionRadio = (e) => {
    e.target.name === 'type' && e.target.value === 'Otro' ? setExtraInputs({ ...extraInputs, type: true }) : setExtraInputs({ ...extraInputs, type: false })
    e.target.name === 'pathologies' && setExtraInputs({ ...extraInputs, pathologies_description: !extraInputs.pathologies_description })
    e.target.name === 'medication' && setExtraInputs({ ...extraInputs, medication_description: !extraInputs.medication_description })
    handlerFormValues(e, setForm)
  }

  return (
    <form onSubmit={(e) => handlerSubmitForm(e, form, API_PATH_LOGIN, errors)} className="flex flex-col gap-8">
      <div className='flex flex-col gap-6'>
        <div className='flex flex-col gap-2 [&>label]:hidden [&>input]:p-2 [&>input]:border-[1px] [&>input]:border-gray-300 [&>input]:rounded-lg'>
          <h2 className='font-medium text-lg'>Nombre de la mascota</h2>
          <label htmlFor="pet-name-user-info">Nombre de la mascota</label>
          <input onChange={(e) => handlerFormValues(e, setForm)} required id='pet-name-user-info' name='name' type="text" placeholder="Nombre de la mascota" minLength={pet_name.min} maxLength={pet_name.max} value={form.name} />
          {
            errors && (<ErrorForms msgError={errors.name} />)
          }
        </div>
        <div className='flex flex-col gap-2 [&>input]:accent-btn'>
          <h2 className='font-medium text-lg'>Tipo de mascota</h2>
          <div className='flex flex-col gap-6'>
            <div className='flex gap-4 [&>label]:text-lg [&>label]:font-medium'>
              {
                PET_TYPES.map((petType, index) => (
                  <label key={petType} htmlFor={`${petType}-pets-form`} className='flex gap-2 cursor-pointer'>
                    <input onChange={handleChangeOptionRadio} id={`${petType}-pets-form`} className='cursor-pointer [&+span]:checked:text-btn' name='type' type="radio" value={petType} defaultChecked={index === 0} />
                    <span>{petType}</span>
                  </label>
                ))
              }
            </div>
            {
              extraInputs.type &&
              <div className='[&>label]:hidden [&>input]:w-full [&>input]:p-2 [&>input]:border-b-[1px] [&>input]:border-gray-300 [&>input]:outline-none'>
                <label htmlFor="other-pets-form">Otro</label>
                <input onChange={(e) => handlerFormValues(e, setForm)} required id='other-pets-form' name='type' type="text" placeholder='Otro...' minLength={pet_type.min} maxLength={pet_type.max} />
              </div>
            }
          </div>
          {
            errors && (<ErrorForms msgError={errors.type} />)
          }
        </div>
        <div className='flex flex-col gap-2 [&>label]:hidden [&>input]:p-2 [&>input]:border-[1px] [&>input]:border-gray-300 [&>input]:rounded-lg'>
          <h2 className='font-medium text-lg'>Peso</h2>
          <select onChange={(e) => handlerFormValues(e, setForm)} required name="weight" className='border-[1px] p-2 border-gray-300 rounded-lg' value={form.weight}>
            {
              PET_WEIGHTS.map(petWeight => (
                <option key={petWeight} value={petWeight}>{petWeight}</option>
              ))
            }
          </select>
          {
            errors && (<ErrorForms msgError={errors.weight} />)
          }
        </div>
        <div className='flex flex-col gap-2 [&>label]:hidden [&>input]:p-2 [&>input]:border-[1px] [&>input]:border-gray-300 [&>input]:rounded-lg'>
          <h2 className='font-medium text-lg'>Edad</h2>
          <select onChange={(e) => handlerFormValues(e, setForm)} required name="age" className='border-[1px] p-2 border-gray-300 rounded-lg' value={form.age}>
            {
              PET_AGE.map(petAge => (
                <option key={petAge} value={petAge}>{petAge}</option>
              ))
            }
          </select>
          {
            errors && (<ErrorForms msgError={errors.age} />)
          }
        </div>
        <div className='flex flex-col gap-2 [&>label]:hidden [&>input]:p-2 [&>input]:border-[1px] [&>input]:border-gray-300 [&>input]:rounded-lg'>
          <h2 className='font-medium text-lg'>¿Tiene alguna patología?</h2>
          <div className='flex gap-4 [&>label]:text-lg [&>label]:font-medium'>
            {
              PET_HAS_PATHOLOGIES.map((petPathology, index) => (
                <label key={petPathology.text} htmlFor={`pathologies-${petPathology.text}-pets-form`} className='flex gap-2 cursor-pointer'>
                  <input onChange={handleChangeOptionRadio} id={`pathologies-${petPathology.text}-pets-form`} className='cursor-pointer [&+span]:checked:text-btn' name='pathologies' type="radio" value={petPathology.value} defaultChecked={index === 1} />
                  <span>{petPathology.text}</span>
                </label>
              ))
            }
          </div>
            {
              extraInputs.pathologies_description &&
              <div className='[&>label]:hidden [&>input]:w-full [&>input]:p-2 [&>input]:border-b-[1px] [&>input]:border-gray-300 [&>input]:outline-none'>
                <label htmlFor="other-pets-form">Otro</label>
                <input onChange={(e) => handlerFormValues(e, setForm)} required id='other-pets-form' name='pathologies' type="text" placeholder='Especificar...' minLength={pet_pathologies.min} maxLength={pet_pathologies.max} />
              </div>
            }
            {
              errors && (<ErrorForms msgError={errors.pathologies} />)
            }
        </div>
        <div className='flex flex-col gap-2 [&>label]:hidden [&>input]:p-2 [&>input]:border-[1px] [&>input]:border-gray-300 [&>input]:rounded-lg'>
          <h2 className='font-medium text-lg'>¿Toma alguna medicación o necesita cuidado especial?</h2>
          <div className='flex gap-4 [&>label]:text-lg [&>label]:font-medium'>
            {
              PET_HAS_MEDICATION.map((petMedication, index) => (
                <label key={petMedication.text} htmlFor={`medication-${petMedication.text}-pets-form`} className='flex gap-2 cursor-pointer'>
                  <input onChange={handleChangeOptionRadio} id={`medication-${petMedication.text}-pets-form`} className='cursor-pointer [&+span]:checked:text-btn' name='medication' type="radio" value={petMedication.value} defaultChecked={index === 1} />
                  <span>{petMedication.text}</span>
                </label>
              ))
            }
          </div>
            {
              extraInputs.medication_description &&
              <div className='[&>label]:hidden [&>input]:w-full [&>input]:p-2 [&>input]:border-b-[1px] [&>input]:border-gray-300 [&>input]:outline-none'>
                <label htmlFor="other-pets-form">Otro</label>
                <input onChange={(e) => handlerFormValues(e, setForm)} required id='other-pets-form' name='medication' type="text" placeholder='Especificar...' minLength={pet_medication.min} maxLength={pet_medication.max} />
              </div>
            }
            {
            errors && (<ErrorForms msgError={errors.medication} />)
            }
        </div>
      </div>
      <div className='flex gap-4'>
        <ButtonGoTo goToPath={PATHS.home} className='w-full bg-white text-btn font-medium text-center rounded-lg py-2 border-[1px] border-btn transition-transform ease-out duration-300 hover:scale-90 hover:shadow-lg disabled:opacity-30' disabled={errors && Object.keys(errors).length !== 0}>Omitir</ButtonGoTo>
        <ButtonSubmit disabled={errors && Object.keys(errors).length !== 0}>Continuar</ButtonSubmit>
      </div>
    </form>
  )
}

export default PetsForm