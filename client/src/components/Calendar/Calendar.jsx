import { Calendar } from '@natscale/react-calendar';
import '@natscale/react-calendar/dist/main.css';
import { isHighlightDays } from '../../utils/functions/daysHighlight';
import { isDisabledDays } from '../../utils/functions/daysDisabled';
// import { handlerValuesToFilter } from '../../utils/functions/valuesTofilter';
import userEvents from '../../assets/other-assets/mocks/calendarMock'; //MOCK para users
import { USER_ROLE_CALENDAR } from '../../assets/other-assets/constants/calendar-resources';
import { useCalendarComponent } from '../../utils/hooks/useCalendarComponent';

const CalendarComponent = ({ role = USER_ROLE_CALENDAR.owner, sendDates = (value) => { console.log(value) }, section = '', setService = null }) => {
  const { value, setValue } = useCalendarComponent(section, setService)

  return (
    <div className='bg-gray-darkCalendar text-white flex flex-col items-center w-max p-4 shadow-xl rounded-sm'>
      <Calendar
        useDarkMode
        isRangeSelector
        value={value}
        isHighlight={(date) => { return isHighlightDays(date, userEvents, role) }}
        isDisabled={(date) => { return isDisabledDays(date, role) }}
        onChange={setValue}
      />
      <p className='text-xs mt-2'>
        <span className='font-bold'>Inicio:</span> {value.length > 0 ? value[0].toDateString() : 'Sin seleccionar'}
        <span className='font-bold'>Finaliza:</span> {value.length > 0 ? value[1].toDateString() : 'Sin seleccionar'}
      </p>
      {/* <button onClick={sendDates(handlerValuesToFilter(value))} className='text-xs font-bold bg-white text-black rounded-lg mt-2 px-2 py-1 hover:scale-105'>CONTINUAR</button> */}
    </div>
  );
}

export default CalendarComponent;
