import { HIRE_EXTRA_SERVICES } from "../../assets/other-assets/constants/hire-extra-services"
import { useDispatch } from "react-redux"
import { addExtraServices } from "../../state/store/slices/hire/hire-slice"
import { formatPrice } from "../../utils/functions/handlerHireCareTakers"

const AddExtraServices = () => {
  const dispatch = useDispatch()
  // const { extraServices } = useSelector(state => state.hireCareTaker)

  return (
    <section className="flex flex-col gap-6">
      <h2>3. Agregar servicios extra</h2>
      <div className="flex flex-col gap-4">
        {
          HIRE_EXTRA_SERVICES.map((service) => (
            <label key={service.id} htmlFor={`extra-service-${service.id}`} className="flex gap-4 items-center cursor-pointer">
              <input onChange={(e) => dispatch(addExtraServices({ isServiceChecked: e.target.checked, service }))} type="checkbox" id={`extra-service-${service.id}`} name={`extra-service-${service.id}`} className="size-4 md:size-5 accent-btn cursor-pointer" />
              <div className="flex flex-col">
                <h3 className="text-sm md:text-base font-medium">{service.name} - <small className="text-sm">{formatPrice(service.price)}</small></h3>
                <p className="text-xs md:text-sm text-gray-400">{service.description}</p>
              </div>
            </label>
          ))
        }
      </div>
    </section>
  )
}

export default AddExtraServices