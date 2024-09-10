import VisualTabs from "../../components/Global/VisualTabs"
import PetsForm from "../../components/PetsForm/PetsForm"
import RegisterLoginHeader from "../../components/register-login/RegisterLoginHeader"
import FooterPetsForm from "../../components/PetsForm/FooterPetsForm"
import plusIcon from '../../assets/svg/plus-icon.svg'
import trashIcon from '../../assets/svg/trash-icon.svg'
import { PATHS } from "../../routes/routes"
import { handlerGoToPetForm, handlerRemovePetForm } from "../../utils/functions/handlerAllPetForms"
import { useAllPetsForm } from "../../utils/hooks/useAllPetsForm"
import { addNewPetForm } from "../../state/store/slices/pets/pet-form-slice"

let currentPetFormInView = 0

const PetsFormContainer = () => {
  const { dispatch, forms, numberOfPetForms, currentNumberPetForm, setCurrentNumberPetForm, petFormRefs } = useAllPetsForm()

  return (
    <main className="flex flex-col gap-4">
      <div className="relative flex flex-col gap-4 w-full px-6">
        <RegisterLoginHeader section='petsForm' goToPath={PATHS.userInfo} />
        <div className="flex flex-col gap-2 max-w-[650px] my-2 mx-auto">
          <VisualTabs section='petsForm' />
          <div className="relative w-[300px] min-[440px]:w-[400px] md:w-[600px]">
            <div className="flex py-4 gap-8 overflow-x-hidden">
              {
                forms.map((_, index) => (
                  <div className="relative" key={index} ref={(el) => (petFormRefs.current[index] = el)}>
                    {
                      forms.length > 1 && (
                        <button onClick={() => handlerRemovePetForm(index, dispatch, numberOfPetForms, setCurrentNumberPetForm)} className="absolute flex justify-center items-center top-2 right-4 p-2 transition-transform duration-300 ease-out hover:scale-75">
                          <img src={trashIcon} alt="borrar formulario" />
                        </button>
                      )
                    }
                    <PetsForm petNumber={index} />
                  </div>
                ))
              }
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-center items-center gap-4 mb-6">
              {
                Array.from({ length: forms.length }).map((_, index) => (
                  <button key={index} onClick={() => handlerGoToPetForm(index, petFormRefs, currentPetFormInView, setCurrentNumberPetForm)} className={`${currentNumberPetForm === index ? 'bg-btn ring-offset-2' : ''} ring-1 ring-btn size-3 rounded-full`}></button>
                ))
              }
              <button onClick={() => dispatch(addNewPetForm())} className="bg-btn size-4 rounded-full ring-offset-2 ring-btn transition-all duration-300 ease-out hover:ring-2 active:scale-90 z-10">
                <img className="p-0.5" src={plusIcon} alt="agregar formulario" />
              </button>
            </div>
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