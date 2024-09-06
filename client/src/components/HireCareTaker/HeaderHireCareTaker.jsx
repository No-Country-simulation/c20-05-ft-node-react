import chevronIcon from "../../assets/svg/chevron-icon.svg"
import useNavigateHelper from "../../utils/hooks/useNavigateHelper"

const HeaderHireCareTaker = () => {
  const { navigateBack } = useNavigateHelper()

  return (
    <div className="relative flex justify-center py-4 border-b-[1px] border-gray-200 font-medium">
      <button onClick={() => navigateBack()} className="absolute top-4 left-4 [&>img]:hover:-translate-x-1">
        <img src={chevronIcon} alt="volver" className="size-5 md:size-6 rotate-90 transition-transform duration-300 ease-out" />
      </button>
      <h1 className="text-base md:text-xl">Completá la reserva</h1>
    </div>
  )
}

export default HeaderHireCareTaker