import VisualTabs from "../../components/Global/VisualTabs"
import PetsForm from "../../components/PetsForm/PetsForm"
import RegisterLoginHeader from "../../components/register-login/RegisterLoginHeader"

const PetsFormContainer = () => {
  return (
    <main className="flex flex-col gap-4">
      <div className="flex flex-col gap-8">
        <RegisterLoginHeader section='petsForm' />
        <VisualTabs section='petsForm' />
        <div className="max-w-[600px] w-full mx-auto px-6">
          <PetsForm />
        </div>
      </div>
    </main>
  )
}

export default PetsFormContainer