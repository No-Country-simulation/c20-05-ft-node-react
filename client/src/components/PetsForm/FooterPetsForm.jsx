import { useSelector } from "react-redux"
import { PATHS } from "../../routes/routes"
import ButtonGoTo from "../Global/ButtonGoTo"
import ButtonSubmit from "../Global/ButtonSubmit"

const FooterPetsForm = () => {
  const { errors } = useSelector((state) => state.petForm)
  return (
    <div className='w-full flex max-[500px]:flex-col-reverse max-md:text-sm gap-4'>
      <ButtonGoTo goToPath={PATHS.home} className='w-full bg-white text-btn font-medium text-center rounded-lg py-2 border-[1px] border-btn transition-transform ease-out duration-300 hover:scale-90 hover:shadow-lg disabled:opacity-30' disabled={errors && Object.keys(errors).length !== 0}>Omitir</ButtonGoTo>
      <ButtonSubmit disabled={errors > 0}>Continuar</ButtonSubmit>
    </div>
  )
}

export default FooterPetsForm