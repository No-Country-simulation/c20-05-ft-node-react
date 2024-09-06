import { APP_NAME } from "../../assets/other-assets/constants/app-info"

const HireSummaryAside = () => {
  return (
    <div className="w-full sm:min-w-[370px] flex-1 min-[1100px]:px-6">
      <aside className="min-[1100px]:sticky min-[1100px]:top-6 w-full flex flex-col gap-6 border border-gray-light rounded-xl py-4 px-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold">Resumen</h2>
          <span>Hospedaje</span>
        </div>
          <div>
            <div className="flex [&>div]:flex [&>div]:flex-col [&>div]:gap-1 [&>div>span]:font-semibold [&>div]:w-full [&>div]:border [&>div]:border-gray-light [&>div]:py-3 [&>div]:px-4">
              <div className="rounded-xl rounded-r-none rounded-b-none border-b-0">
                <span>Desde</span>
                <small>15/09/2024</small>
              </div>
              <div className="border-gray-light rounded-xl rounded-l-none rounded-b-none border-b-0">
                <span>Hasta</span>
                <small>18/09/2024</small>
              </div>
            </div>
            <div className="flex flex-col gap-1 py-3 px-4 border border-gray-light rounded-xl rounded-t-none [&>span]:font-semibold">
              <span>Mascotas</span>
              <small>5 mascotas</small>
            </div>
          </div>
          <div className="border-b-2 border-gray-200 pb-6">
            <ul className="flex flex-col gap-4 [&>li]:flex [&>li]:flex-col [&>li]:gap-2 [&>li>div>span]:font-medium">
              <li>
                <div className="flex justify-between">
                  <span>Servicio</span>
                  <small className="font-semibold text-base">$45.000</small>
                </div>
                <div className="flex justify-between">
                  <span className="ps-4 text-gray-400 text-sm">x5 mascotas</span>
                  <small className="text-gray-400 text-sm font-medium">$45.000</small>
                </div>
                <div className="flex justify-between">
                  <span className="ps-4 text-gray-400 text-sm">x3 noches</span>
                  <small className="text-gray-400 text-sm font-medium">$45.000</small>
                </div>
              </li>
              <li>
                <div className="flex justify-between">
                  <span>Comisión {APP_NAME}</span>
                  <small className="font-semibold">$1.000</small>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex justify-between">
            <span className="text-lg font-semibold">Total</span>
            <small className="text-lg font-semibold">$46.000</small>
          </div>
        <button className="bg-btn text-white font-semibold rounded-lg p-2 w-full">Contratar</button>
      </aside>
    </div>
  )
}

export default HireSummaryAside