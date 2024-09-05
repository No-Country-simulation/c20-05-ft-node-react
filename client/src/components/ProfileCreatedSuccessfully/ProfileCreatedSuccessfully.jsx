import greenCheckIcon from "../../assets/svg/green-check-icon.svg"
import '../../styles/modal-profile-created.css'
import { APP_NAME } from "../../assets/other-assets/constants/app-info"
import ButtonGoTo from "../Global/ButtonGoTo"

const ProfileCreatedSuccessfully = ({ pathSkip, pathGoTo }) => {
  return (
    <>
    <div className="fixed top-0 left-0 w-full h-screen bg-black/60 z-10"></div>
    <div className="absolute inset-0 m-auto max-sm:mx-6 bg-page-background sm:max-w-[500px] h-fit rounded-2xl flex flex-col gap-4 shadow-xl p-6 border border-gray-500 border-opacity-20 z-20">
      <img className="size-12 sm:size-14 relative -left-2" src={greenCheckIcon} alt="check icono" />
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-xl sm:text-2xl">Tu perfil ha sido creado</h3>
        <p className="max-sm:text-sm">¡Ya eres parte de <strong>{APP_NAME}</strong>!</p>
      </div>
      <div className="flex max-sm:flex-col-reverse gap-4 mt-4 max-sm:[&>a]:text-sm">
        <ButtonGoTo goToPath={pathSkip} className='w-full bg-white text-btn font-medium text-center rounded-lg py-2 border-[1px] border-btn transition-transform ease-out duration-300 hover:scale-90 hover:shadow-lg disabled:opacity-30'>Ir al inicio</ButtonGoTo>
        <ButtonGoTo goToPath={pathGoTo}>Continuar</ButtonGoTo>
      </div>
    </div>
    </>
  )
}
export default ProfileCreatedSuccessfully;