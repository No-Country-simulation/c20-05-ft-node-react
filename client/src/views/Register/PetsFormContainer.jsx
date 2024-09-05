import { useRef, useState } from "react"
import VisualTabs from "../../components/Global/VisualTabs"
import PetsForm from "../../components/PetsForm/PetsForm"
import RegisterLoginHeader from "../../components/register-login/RegisterLoginHeader"
import FooterPetsForm from "../../components/PetsForm/FooterPetsForm"
import '../../styles/pets-form.css'
import plusIcon from '../../assets/svg/plus-icon.svg'
import { useDispatch, useSelector } from "react-redux"
import { addNumberOfPetForms } from "../../state/store/slices/pets/pet-form-slice"
import { PATHS } from "../../routes/routes"

let currentPetFormInView = 0

const PetsFormContainer = () => {
  // const [numberOfPetForms, setNumberOfPetForms] = useState(1)
  const dispatch = useDispatch()
  const { numberOfPetForms } = useSelector((state) => state.petForm)
  const [currentNumberPetForm, setCurrentNumberPetForm] = useState(0)
  const petFormRefs = useRef([])

  const handleAddPetForm = () => dispatch(addNumberOfPetForms(numberOfPetForms + 1))
  const handleGoToPetForm = (valueToGo) => {
    petFormRefs?.current[valueToGo].scrollIntoView({ behavior: 'smooth' })
    currentPetFormInView = valueToGo
    setCurrentNumberPetForm(valueToGo)
  }

  // useEffect(() => {
  //   currentPetFormInView === numberOfPetForms - 1 ? setIsDisabled(true) : setIsDisabled(false)
  // }, [numberOfPetForms])

  // const handleChangePetForm = (value) => {
  //   console.log('numberOfPetForms', numberOfPetForms)
  //   console.log('currentPetFormInView', currentPetFormInView)
  //   if (currentPetFormInView + value < 0 || currentPetFormInView + value > numberOfPetForms -1) return
  //   currentPetFormInView = currentPetFormInView + value
  //   setCurrentNumberPetForm(currentPetFormInView)
  //   const petForm = petFormRefs?.current
  //   petForm[currentPetFormInView].scrollIntoView({ behavior: 'smooth' })
  // }

  return (
    <main className="flex flex-col gap-4">
      <div className="relative flex flex-col gap-4 w-full px-6">
        <RegisterLoginHeader section='petsForm' goToPath={PATHS.userInfo} />
        <div className="flex flex-col gap-2 max-w-[650px] my-2 mx-auto">
          <VisualTabs section='petsForm' />
          <div className="relative">
            <button onClick={handleAddPetForm} className="absolute top-4 -right-1 bg-btn text-3xl size-[40px] text-white p-2 rounded-full ring-offset-2 ring-btn transition-all duration-300 ease-out hover:ring-2 active:scale-90">
              <img src={plusIcon} alt="agregar formulario" />
            </button>
            <div className="flex py-4 gap-8 overflow-x-hidden custom-container-pet-forms">
              {
                Array.from({ length: numberOfPetForms }).map((_, index) => (
                  <div key={index} ref={(el) => (petFormRefs.current[index] = el)}>
                    <PetsForm petNumber={index} />
                  </div>
                ))
              }
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-center gap-4 mb-6">
              {
                Array.from({ length: numberOfPetForms }).map((_, index) => (
                  <button key={index} onClick={() => handleGoToPetForm(index)} className={`${currentNumberPetForm === index ? 'bg-btn' : ''} ring-1 ring-btn size-3 rounded-full`}></button>
                ))
              }
            </div>
            {/* <div className="flex justify-center gap-12 w-full">
              <button onClick={() => handleChangePetForm(-1)} className="bg-btn text-white rounded-lg w-fit p-2 disabled:opacity-60">Back</button>
              <button onClick={() => handleChangePetForm(1)} className="bg-btn text-white rounded-lg w-fit p-2 disabled:opacity-60">Next</button>
            </div> */}
          </div>
          <div className="w-full">
            <FooterPetsForm />
          </div>
        </div>
      </div>
    </main>
  )
}

export default PetsFormContainer