import HeaderHireCareTaker from "../../components/HireCareTaker/HeaderHireCareTaker"
import HireCareTakerForm from "../../components/HireCareTaker/HireCareTakerForm"
import HireSummaryAside from "../../components/HireCareTaker/HireSummaryAside"

const HireCareTaker = () => {
  return (
    <main className="mt-2 mb-6">
      <div className="flex flex-col gap-4 max-w-[1200px] w-full mx-auto">
        <HeaderHireCareTaker />
        <div className="flex max-[1100px]:flex-col gap-x-14 gap-y-6 max-sm:px-6 max-[1280px]:px-20">
          <HireCareTakerForm />
          <HireSummaryAside />
        </div>
      </div>
    </main>
  )
}

export default HireCareTaker