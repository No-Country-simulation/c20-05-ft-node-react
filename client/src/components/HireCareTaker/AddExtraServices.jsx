import { HIRE_EXTRA_SERVICES } from "../../assets/other-assets/constants/hire-extra-services"

const AddExtraServices = () => {
  return (
    <section className="flex flex-col gap-6">
      <h2>3. Agregar servicios extra</h2>
      <div className="flex flex-col gap-4">
        {
          HIRE_EXTRA_SERVICES.map((service) => (
            <label key={service.id} htmlFor={`extra-service-${service.id}`} className="flex gap-4 items-center cursor-pointer">
              <input type="checkbox" id={`extra-service-${service.id}`} name={`extra-service-${service.id}`} className="size-4 md:size-5 accent-btn cursor-pointer" />
              <div className="flex flex-col">
                <h3 className="text-sm md:text-base font-medium">{service.name}</h3>
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