import CloseSvg from "../../assets/svg/mingcute--close-line.svg"
import CheckSvg from "../../assets/svg/ic--outline-check-circle.svg"

const ProfileCreatedSuccessfully = ({ pathSkip, pathGoTo }) => {
  return (
    <div className="absolute inset-0 bg-page-background w-[300px] h-max rounded-lg flex flex-col shadow-xl p-4 gap-4 border border-gray-500 border-opacity-20 m-auto sm:w-[450px] sm:h-[400px] sm:gap-6 z-10">
      <button className="bg-transparent self-end">
        <img className="size-7" src={CloseSvg} alt="cruz icono" />
      </button>
      <div className="bg-green-200 size-12 border-8 -mt-8 border-green-100 rounded-full flex items-center justify-center sm:size-16 sm:border-[12px]">
        <img className="size-7" src={CheckSvg} alt="check icono" />
      </div>
      <div className="flex flex-col gap-2 px-4">
        <p className="font-bold text-lg sm:text-2xl">Tu perfil ha sido creado con éxito</p>
        <p className="text-sm text-[#475467] sm:text-lg">¡Ya eres parte de (nombre de app)!</p>
      </div>
      <div className="mt-3 flex justify-between [&>a]:text-center [&>a]:h-10 [&>a]:w-28 [&>a]:font-bold sm:mt-28 sm:[&>a]:h-14 sm:[&>a]:w-32 sm:[&>a]:text-xl" >
        <a href={pathSkip}>Omitir</a>
        <a href={pathGoTo} className="border-2 border-blue-400 text-center rounded-lg text-blue-400">Continuar</a>
      </div>
    </div>
  )
}
export default ProfileCreatedSuccessfully;