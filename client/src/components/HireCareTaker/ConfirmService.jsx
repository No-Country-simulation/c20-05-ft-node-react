import { useMemo, useState } from "react"
import EditIcon from "./EditIcon"
import { useSelector } from "react-redux"
import { getFormattedServiceDate } from "../../utils/functions/handlerHireCareTakers"
import CalendarComponent from "../Calendar/Calendar"

const ConfirmService = () => {
  const { date, services } = useSelector(state => state.hireCareTaker.confirmServices)
  const formattedDate = useMemo(() => getFormattedServiceDate(date), [date])
  const [calendarAndSelect, setCalendarAndSelect] = useState({ calendar: false, select: false })

  const handlerShowCalendarAndSelect = (valueToShow) => setCalendarAndSelect({ ...calendarAndSelect, [valueToShow]: !calendarAndSelect[valueToShow] })

  const handlerConfirmEdit = () => setCalendarAndSelect({ calendar: false, select: false })

  return (
    <section className="relative flex flex-col gap-6">
      <h2>2. Confirmar servicio</h2>
      <div className="w-fit flex flex-col gap-6 [&>div>div>h3]:text-base md:[&>div>div>h3]:text-lg [&>div>h3]:font-medium">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <button onClick={() => handlerShowCalendarAndSelect('calendar')}>
              <EditIcon />
            </button>
            <h3>Fechas</h3>
            {
              calendarAndSelect.calendar && (
                <div className="absolute top-0 right-0">
                  <CalendarComponent section='hire' />
                  <button onClick={handlerConfirmEdit} className="bg-btn text-white font-semibold rounded-lg p-2 w-full">Confirmar</button>
                </div>
              )
            }
          </div>
          <span className="text-sm">{formattedDate || <span className="text-gray-400">{'No hay fechas seleccionadas'}</span>}</span>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <button onClick={() => handlerShowCalendarAndSelect('select')}>
              <EditIcon />
            </button>
            <h3>Servicios</h3>
          </div>
          <span className="text-sm">{services || <span className="text-gray-400">{'No hay servicios seleccionados'}</span>}</span>
        </div>
      </div>
    </section>
  )
}

export default ConfirmService