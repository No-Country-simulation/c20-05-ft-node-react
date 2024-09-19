import { useEffect, useState } from "react";
import { addStartAndEndDate } from "../../state/store/slices/hire/hire-slice";
import { useDispatch } from "react-redux";

export const useCalendarComponent = (section, setService) => {
  const [value, setValue] = useState(section === 'hire' ? [] : [new Date(), new Date()])
  const dispatch = useDispatch()

  useEffect(() => {
    if (value.length === 0) return
    const [start, end] = value
    const newDate = { start: start.toDateString(), end: end.toDateString() }
    setService
      ? setService(prev => ({ ...prev, serviceDate: newDate }))
      : dispatch(addStartAndEndDate(newDate))
  }, [value])

  return { value, setValue }
}