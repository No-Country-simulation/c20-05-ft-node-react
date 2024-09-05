import VisualTabs from "../../components/Global/VisualTabs"
import PetsForm from "../../components/PetsForm/PetsForm"
import RegisterLoginHeader from "../../components/register-login/RegisterLoginHeader"
import FooterPetsForm from "../../components/PetsForm/FooterPetsForm"
import plusIcon from '../../assets/svg/plus-icon.svg'
import { PATHS } from "../../routes/routes"
import { handlerAddPetForm, handlerGoToPetForm } from "../../utils/functions/handlerAllPetForms"
import { useAllPetsForm } from "../../utils/hooks/useAllPetsForm"

let currentPetFormInView = 0

const PetsFormContainer = () => {
  const { dispatch, numberOfPetForms, currentNumberPetForm, setCurrentNumberPetForm, petFormRefs } = useAllPetsForm()

  return (
    <main className="flex flex-col gap-4">
      <div className="relative flex flex-col gap-4 w-full px-6">
        <RegisterLoginHeader section='petsForm' goToPath={PATHS.userInfo} />
        <div className="flex flex-col gap-2 max-w-[650px] my-2 mx-auto">
          <VisualTabs section='petsForm' />
          <div className="relative w-[300px] min-[440px]:w-[400px] md:w-[600px]">
            <button onClick={() => handlerAddPetForm(dispatch, numberOfPetForms)} className="absolute top-2 right-1 bg-btn text-3xl size-[40px] text-white p-2 rounded-full ring-offset-2 ring-btn transition-all duration-300 ease-out hover:ring-2 active:scale-90">
              <img src={plusIcon} alt="agregar formulario" />
            </button>
            <div className="flex py-4 gap-8 overflow-x-hidden">
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
                  <button key={index} onClick={() => handlerGoToPetForm(index, petFormRefs, currentPetFormInView, setCurrentNumberPetForm)} className={`${currentNumberPetForm === index ? 'bg-btn' : ''} ring-1 ring-btn size-3 rounded-full`}></button>
                ))
              }
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