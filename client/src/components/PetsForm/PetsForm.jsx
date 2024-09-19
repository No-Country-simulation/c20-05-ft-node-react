import { FORM_ERROR_VALUES } from '../../assets/other-assets/errors-values'
import ErrorForms from '../ErrorsForms/ErrorForms'
import { handlerSubmitForm } from '../../utils/functions/handlerSubmitForm'
import { API_PATH_LOGIN } from '../../routes/routes'
import { PET_AGE, PET_HAS_MEDICATION, PET_HAS_PATHOLOGIES, PET_TYPES, PET_WEIGHTS } from '../../assets/other-assets/constants/pets-form-resources'
import { usePetsForm } from '../../utils/hooks/usePetsForm'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { handlerChangeValuesForm } from '../../utils/functions/handlerChangeValuesForm'

const PetsForm = ({ petNumber }) => {
  const uid = useMemo(() => crypto.randomUUID(), [])
  const dispatch = useDispatch()
  const { form, errors, setErrors, extraInputs } = usePetsForm(petNumber)
  const { pet_name, pet_type, pet_pathologies, pet_medication } = FORM_ERROR_VALUES

  return (
    <form onSubmit={(e) => handlerSubmitForm(e, form, API_PATH_LOGIN, errors)} className="flex flex-col min-w-[260px] min-[440px]:min-w-[360px] md:min-w-[560px] gap-8 shadow-md p-6 rounded-lg first:ms-4 last:me-4">
      <div className='flex flex-col gap-6'>
        <div className='flex flex-col gap-2 [&>label]:hidden [&>input]:p-2 [&>input]:border-[1px] [&>input]:border-gray-300 [&>input]:rounded-lg'>
          <h2 className='font-medium text-base md:text-lg text-primary text-center mb-4'>Mascota {form.name || petNumber + 1}</h2>
          <h2 className='font-medium text-base md:text-lg'>Nombre de la mascota</h2>
          <label htmlFor={`pet-name-user-info-${uid}`}>Nombre de la mascota</label>
          <input onChange={(e) => handlerChangeValuesForm(e, form, dispatch, setErrors, petNumber, extraInputs, dispatch)} required id={`pet-name-user-info-${uid}`} name='name' type="text" placeholder="Nombre de la mascota" minLength={pet_name.min} maxLength={pet_name.max} value={form.name} />
          {
            errors && (<ErrorForms msgError={errors.name} />)
          }
        </div>
        <div className='flex flex-col gap-2 [&>input]:accent-btn'>
          <h2 className='font-medium text-base md:text-lg'>Tipo de mascota</h2>
          <div className='flex flex-col gap-6'>
            <div className='flex gap-4 text-base md:[&>label]:text-lg [&>label]:font-medium'>
              {
                PET_TYPES.map((petType, index) => (
                  <label key={petType} htmlFor={`${petType}-pets-form-${uid}`} className='flex gap-2 cursor-pointer'>
                    <input onChange={(e) => handlerChangeValuesForm(e, form, dispatch, setErrors, petNumber, extraInputs, dispatch)} id={`${petType}-pets-form-${uid}`} className='cursor-pointer [&+span]:checked:text-btn' name='type' type="radio" value={petType} defaultChecked={!PET_TYPES.includes(form.type) || form.types === 'Otro' ? index === PET_TYPES.length - 1 : form.type === petType} />
                    <span>{petType}</span>
                  </label>
                ))
              }
            </div>
            {
              extraInputs.type &&
              <div className='[&>label]:hidden [&>input]:w-full [&>input]:p-2 [&>input]:border-b-[1px] [&>input]:border-gray-300 [&>input]:outline-none'>
                <label htmlFor={`other-pets-form-${uid}`}>Otro</label>
                <input onChange={(e) => handlerChangeValuesForm(e, form, dispatch, setErrors, petNumber, extraInputs, dispatch)} required id={`other-pets-form-${uid}`} name='type' type="text" placeholder='Otro...' minLength={pet_type.min} maxLength={pet_type.max} value={form.type !== 'Otro' ? form.type : ''} />
              </div>
            }
          </div>
          {
            errors && (<ErrorForms msgError={errors.type} />)
          }
        </div>
        <div className='flex flex-col gap-2 [&>label]:hidden [&>input]:p-2 [&>input]:border-[1px] [&>input]:border-gray-300 [&>input]:rounded-lg'>
          <h2 className='font-medium text-base md:text-lg'>Peso</h2>
          <select onChange={(e) => handlerChangeValuesForm(e, form, dispatch, setErrors, petNumber, extraInputs, dispatch)} required name="weight" className='border-[1px] p-2 border-gray-300 rounded-lg' value={form.weight}>
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
          <h2 className='font-medium text-base md:text-lg'>Edad</h2>
          <select onChange={(e) => handlerChangeValuesForm(e, form, dispatch, setErrors, petNumber, extraInputs, dispatch)} required name="age" className='border-[1px] p-2 border-gray-300 rounded-lg' value={form.age}>
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
          <h2 className='font-medium text-base md:text-lg'>¿Tiene alguna patología?</h2>
          <div className='flex gap-4 [&>label]:text-base md:[&>label]:text-lg [&>label]:font-medium'>
            {
              PET_HAS_PATHOLOGIES.map((petPathology, index) => (
                <label key={petPathology.text} htmlFor={`pathologies-${petPathology.text}-pets-form-${uid}`} className='flex gap-2 cursor-pointer'>
                  <input onChange={(e) => handlerChangeValuesForm(e, form, dispatch, setErrors, petNumber, extraInputs, dispatch)} id={`pathologies-${petPathology.text}-pets-form-${uid}`} className='cursor-pointer [&+span]:checked:text-btn' name='pathologies' type="radio" value={petPathology.value} defaultChecked={form.pathologies !== '' ? index === 0 : index === 1} />
                  <span>{petPathology.text}</span>
                </label>
              ))
            }
          </div>
            {
              extraInputs.pathologies_description &&
              <div className='[&>label]:hidden [&>input]:w-full [&>input]:p-2 [&>input]:border-b-[1px] [&>input]:border-gray-300 [&>input]:outline-none'>
                <label htmlFor={`pathologies-pets-form-${uid}`}>Otro</label>
                <input onChange={(e) => handlerChangeValuesForm(e, form, dispatch, setErrors, petNumber, extraInputs, dispatch)} required id={`pathologies-pets-form-${uid}`} name='pathologies' type="text" placeholder='Especificar...' minLength={pet_pathologies.min} maxLength={pet_pathologies.max} value={form.pathologies !== 'yes' ? form.pathologies : ''} />
              </div>
            }
            {
              errors && (<ErrorForms msgError={errors.pathologies} />)
            }
        </div>
        <div className='flex flex-col gap-2 [&>label]:hidden [&>input]:p-2 [&>input]:border-[1px] [&>input]:border-gray-300 [&>input]:rounded-lg'>
          <h2 className='font-medium text-base md:text-lg'>¿Toma medicación o necesita cuidado especial?</h2>
          <div className='flex gap-4 [&>label]:text-base md:[&>label]:text-lg [&>label]:font-medium'>
            {
              PET_HAS_MEDICATION.map((petMedication, index) => (
                <label key={petMedication.text} htmlFor={`medication-${petMedication.text}-pets-form-${uid}`} className='flex gap-2 cursor-pointer'>
                  <input onChange={(e) => handlerChangeValuesForm(e, form, dispatch, setErrors, petNumber, extraInputs, dispatch)} id={`medication-${petMedication.text}-pets-form-${uid}`} className='cursor-pointer [&+span]:checked:text-btn' name='medication' type="radio" value={petMedication.value} defaultChecked={form.medication !== '' ? index === 0 : index === 1} />
                  <span>{petMedication.text}</span>
                </label>
              ))
            }
          </div>
            {
              extraInputs.medication_description &&
              <div className='[&>label]:hidden [&>input]:w-full [&>input]:p-2 [&>input]:border-b-[1px] [&>input]:border-gray-300 [&>input]:outline-none'>
                <label htmlFor={`medication-pets-form-${uid}`}>Otro</label>
                <input onChange={(e) => handlerChangeValuesForm(e, form, dispatch, setErrors, petNumber, extraInputs, dispatch)} required id={`medication-pets-form-${uid}`} name='medication' type="text" placeholder='Especificar...' minLength={pet_medication.min} maxLength={pet_medication.max} value={form.medication !== 'yes' ? form.medication : ''} />
              </div>
            }
            {
              errors && (<ErrorForms msgError={errors.medication} />)
            }
        </div>
      </div>
    </form>
  )
}

export default PetsForm