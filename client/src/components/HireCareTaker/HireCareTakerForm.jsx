import SelectPets from "./SelectPets"
import ConfirmService from "./ConfirmService"
import AddExtraServices from "./AddExtraServices"
import PaymentMethod from "./PaymentMethod"

const HireCareTakerForm = () => {
  return (
    <div className="max-w-3/5 flex flex-col divide-y divide-gray-light [&>section]:py-8 [&>section>h2]:text-lg md:[&>section>h2]:text-xl [&>section>h2]:font-semibold [&>section>h2]:text-pretty">
      <SelectPets />
      <ConfirmService />
      <AddExtraServices />
      <PaymentMethod />
    </div>
  )
}

export default HireCareTakerForm