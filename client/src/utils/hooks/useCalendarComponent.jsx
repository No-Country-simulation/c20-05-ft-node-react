import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addStartAndEndDate } from "../../state/store/slices/hire/hire-slice";

export const useCalendarComponent = (section) => {
  const [value, setValue] = useState([new Date(), new Date()])
  const dispatch = useDispatch()

  useEffect(() => {
    const [start, end] = value
    const newDate = { start: start.toDateString(), end: end.toDateString() }
    section === 'hire' && dispatch(addStartAndEndDate(newDate))
  }, [value])

  return { value, setValue }
}