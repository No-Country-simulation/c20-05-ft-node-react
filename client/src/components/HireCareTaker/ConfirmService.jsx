import { useMemo } from "react"
import { Link } from "react-router-dom"
import EditIcon from "./EditIcon"
import { useSelector } from "react-redux"
import { getFormattedServiceDate } from "../../utils/functions/handlerHireCareTakers"

const ConfirmService = () => {
  const { date, services } = useSelector(state => state.hireCareTaker.confirmServices)
  const formattedDate = useMemo(() => getFormattedServiceDate(date), [date])
  
  return (
    <section className="flex flex-col gap-6">
      <h2>2. Confirmar servicio</h2>
      <div className="w-fit flex flex-col gap-6 [&>div>div>h3]:text-base md:[&>div>div>h3]:text-lg [&>div>h3]:font-medium">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <Link to="/profile/23/hire">
              <EditIcon />
            </Link>
            <h3>Fechas</h3>
          </div>
          <span className="text-sm">{formattedDate || <span className="text-gray-400">{'No hay fechas seleccionadas'}</span>}</span>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <Link to="/profile/23/hire">
              <EditIcon />
            </Link>
            <h3>Servicios</h3>
          </div>
          <span className="text-sm">{services || <span className="text-gray-400">{'No hay servicios seleccionados'}</span>}</span>
        </div>
      </div>
    </section>
  )
}

export default ConfirmService