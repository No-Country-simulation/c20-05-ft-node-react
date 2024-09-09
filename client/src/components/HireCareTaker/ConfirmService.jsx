import { useMemo, useState } from "react"
import EditIcon from "./EditIcon"
import { useDispatch, useSelector } from "react-redux"
import { getFormattedServiceDate } from "../../utils/functions/handlerHireCareTakers"
import CalendarComponent from "../Calendar/Calendar"
import { useCaretakerProfileToHire } from "../../utils/hooks/useCaretakerProfileToHire"
import { addServices } from "../../state/store/slices/hire/hire-slice"

const ConfirmService = () => {
  const { date, services } = useSelector(state => state.hireCareTaker.confirmServices)
  const formattedDate = useMemo(() => getFormattedServiceDate(date), [date])
  const [calendarAndSelect, setCalendarAndSelect] = useState({ calendar: false, select: false })
  const { servicesOptions } = useCaretakerProfileToHire()
  const dispatch = useDispatch()

  const handlerShowCalendarAndSelect = (valueToShow) => setCalendarAndSelect({
    [valueToShow]: !calendarAndSelect[valueToShow],
    [valueToShow === 'calendar' ? 'select' : 'calendar']: false
  })

  const handlerConfirmEdit = () => setCalendarAndSelect({ calendar: false, select: false })

  const handlerSelectServiceOption = (e) => {
    console.log(e.target.value)
    setCalendarAndSelect({ ...calendarAndSelect, select: false })
    dispatch(addServices(e.target.value))
  }

  return (
    <section className="flex flex-col gap-6">
      <h2>2. Confirmar servicio</h2>
      <div className="w-full flex flex-col gap-6 [&>div>div>h3]:text-base md:[&>div>div>h3]:text-lg [&>div>h3]:font-medium">
        <div className="relative flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <button onClick={() => handlerShowCalendarAndSelect('calendar')} className="hover:opacity-50">
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
        <div className="relative flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <button onClick={() => handlerShowCalendarAndSelect('select')} className="hover:opacity-50">
              <EditIcon />
            </button>
            <h3>Servicios</h3>
            {
              calendarAndSelect.select && (
                <div className="absolute top-0 right-0">
                  <select onChange={handlerSelectServiceOption} name="edit-service" id="edit-service" className='border-[1px] p-2 border-gray-300 rounded-lg cursor-pointer'>
                    {
                      servicesOptions.map((service, index) => {
                        return (<option key={index} value={service} selected={services === service}>{service}</option>)
                      })
                    }
                  </select>
                </div>
              )
            }
          </div>
          <span className="text-sm">{services || <span className="text-gray-400">{'No hay servicios seleccionados'}</span>}</span>
        </div>
      </div>
    </section>
  )
}

export default ConfirmService