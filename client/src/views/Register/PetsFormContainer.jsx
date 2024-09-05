import { useState } from "react"
import VisualTabs from "../../components/Global/VisualTabs"
import PetsForm from "../../components/PetsForm/PetsForm"
import RegisterLoginHeader from "../../components/register-login/RegisterLoginHeader"

const PetsFormContainer = () => {
  const [numberLoops, setNumberLoops] = useState(1)

  const handleAddPetForm = () => setNumberLoops(numberLoops + 1)

  return (
    <main className="flex flex-col gap-4">
      <div className="flex flex-col gap-8">
        <RegisterLoginHeader section='petsForm' />
        <VisualTabs section='petsForm' />
        {
          Array.from({ length: numberLoops }).map((_, index) => (
            <div key={index} className="max-w-[600px] w-full mx-auto px-6">
              <PetsForm />
            </div>
          ))
        }
        <button onClick={handleAddPetForm} className="bg-black text-white p-2 rounded-full">+</button>
      </div>
    </main>
  )
}

export default PetsFormContainer