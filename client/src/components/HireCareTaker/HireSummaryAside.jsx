import { useSelector } from "react-redux"
import { APP_NAME } from "../../assets/other-assets/constants/app-info"
import { formatPrice, formattedDatesWithSlashes, getNigthsDifference, getResultAndFormattedPrice } from "../../utils/functions/handlerHireCareTakers"
import { useEffect, useMemo } from "react"

const PRICE_PER_PET_PET_NIGHT = 15000
const COMMISSION = 1000

const HireSummaryAside = () => {
  const { selectedPets, confirmServices } = useSelector(state => state.hireCareTaker)
  const [startWithSlashes, endWithSlashes] = useMemo(() => formattedDatesWithSlashes(confirmServices.date), [confirmServices.date])
  const nigthsDifference = useMemo(() => getNigthsDifference(confirmServices.date), [confirmServices.date])
  const { formattedPrice: formattedPricePerAllPrice } = useMemo(() => getResultAndFormattedPrice('*', PRICE_PER_PET_PET_NIGHT, selectedPets.length), [selectedPets])
  const { formattedPrice: formattedPricePerAllNights } = useMemo(() => getResultAndFormattedPrice('*', PRICE_PER_PET_PET_NIGHT, nigthsDifference), [nigthsDifference])
  const { result: serviciePrice, formattedPrice: formattedServicePrice } = useMemo(() => getResultAndFormattedPrice('*', PRICE_PER_PET_PET_NIGHT, selectedPets.length, nigthsDifference), [selectedPets, nigthsDifference])
  const { formattedPrice: formattedTotalPrice } = useMemo(() => getResultAndFormattedPrice('+', serviciePrice, COMMISSION), [serviciePrice])


  console.log('serviciePrice', serviciePrice)

  useEffect(() => {
    console.log('confirmServices', confirmServices)
  }, [confirmServices])

  return (
    <div className="w-full sm:min-w-[370px] flex-1 min-[1100px]:px-6">
      <aside className="min-[1100px]:sticky min-[1100px]:top-6 w-full flex flex-col gap-6 border border-gray-light rounded-xl py-4 px-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold">Resumen</h2>
          <span>{confirmServices.services || <span className="text-gray-400">{'No hay servicios seleccionados'}</span>}</span>
        </div>
        <div>
          <div className="flex [&>div]:flex [&>div]:flex-col [&>div]:gap-1 [&>div>span]:font-semibold [&>div]:w-full [&>div]:border-gray-light [&>div]:py-3 [&>div]:px-4">
            <div className="border rounded-xl rounded-r-none rounded-b-none border-b-0 border-r-0">
              <span>Desde</span>
              <small>{startWithSlashes || <span className="text-gray-400">{'Sin seleccionar'}</span>}</small>
            </div>
            <div className="border border-gray-light rounded-xl rounded-l-none rounded-b-none border-b-0">
              <span>Hasta</span>
              <small>{endWithSlashes || <span className="text-gray-400">{'Sin seleccionar'}</span>}</small>
            </div>
          </div>
          <div className="flex flex-col gap-1 py-3 px-4 border border-gray-light rounded-xl rounded-t-none [&>span]:font-semibold">
            <span>Mascotas</span>
            <small>{selectedPets.length > 0 ? `${selectedPets.length} mascota${selectedPets.length !== 1 ? 's' : ''}` : 'Sin seleccionar' }</small>
          </div>
        </div>
        <div className="border-b-2 border-gray-200 pb-6">
          <ul className="flex flex-col gap-4 [&>li]:flex [&>li]:flex-col [&>li]:gap-2 [&>li>div>span]:font-medium">
            <li>
              <div className="flex justify-between">
                <span>Servicio</span>
                <small className="font-semibold text-base">{formattedServicePrice}</small>
              </div>
              <div className={`${selectedPets.length < 1 ? 'hidden' : ''} flex justify-between`}>
                <span className="ps-4 text-gray-400 text-sm">x{selectedPets.length} mascotas</span>
                <small className="text-gray-400 text-sm font-medium">{formattedPricePerAllPrice}</small>
              </div>
              <div className={`${!nigthsDifference ? 'hidden' : ''} flex justify-between`}>
                <span className="ps-4 text-gray-400 text-sm">x{nigthsDifference} noche{nigthsDifference !== 1 ? 's' : ''}</span>
                <small className="text-gray-400 text-sm font-medium">{formattedPricePerAllNights}</small>
              </div>
            </li>
            <li>
              <div className="flex justify-between">
                <span>Comisión {APP_NAME}</span>
                <small className="font-semibold text-base">{formatPrice(COMMISSION)}</small>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex justify-between">
          <span className="text-lg font-semibold">Total</span>
          <small className="text-lg font-semibold">{formattedTotalPrice}</small>
        </div>
        <button className="bg-btn text-white font-semibold rounded-lg p-2 w-full">Contratar</button>
      </aside>
    </div>
  )
}

export default HireSummaryAside