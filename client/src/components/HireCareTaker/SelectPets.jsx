import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { PATHS } from "../../routes/routes"
import { USER_PETS } from "../../assets/other-assets/mocks/userPets"
import CheckIcon from "../../assets/svg/check.svg"
import { addAndRemoveSelectedPets } from "../../state/store/slices/hire/hire-slice"

const SelectPets = () => {
  const dispatch = useDispatch()
  const { selectedPets } = useSelector(state => state.hireCareTaker)

  return (
    <section className="flex flex-col gap-6">
      <h2>1. Seleccioná las mascotas para las que contratás el servicio</h2>
      <ul className="flex gap-6">
        {
          USER_PETS.map(({id, name, photo}) => (
            <li key={id} onClick={() => dispatch(addAndRemoveSelectedPets(id))} className="flex flex-col gap-2 items-center">
              <div className="relative">
                <img src={photo} alt={name} className={`size-16 object-cover border-4 ${selectedPets?.includes(id) ? 'border-btn' : 'border-transparent'} rounded-full cursor-pointer`} />
                {
                  selectedPets?.includes(id) && (
                    <div className="absolute -bottom-1 right-1 flex justify-center items-center size-6 bg-btn rounded-full cursor-pointer">
                      <img src={CheckIcon} alt='check icono' className="size-4 invert" />
                    </div>
                  )
                }
              </div>
              <span className={`${selectedPets?.includes(id) ? 'text-btn font-semibold' : ''} font-medium cursor-pointer`}>{name}</span>
            </li>
          ))
        }
      </ul>
      <p className="text-xs md:text-sm text-gray-400">Si todavía no tenés tus mascotas registradas, registralas en tu <Link to={PATHS.petsForm} className="underline font-semibold text-btn">perfil</Link>.</p>
    </section>
  )
}

export default SelectPets