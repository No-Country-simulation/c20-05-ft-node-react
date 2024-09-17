import { addServices, addStartAndEndDate } from "../../state/store/slices/hire/hire-slice"

const getResult = (operation = '*', ...values) => {

  console.log('operation', operation)
  console.log('values', values)

  const defaultValues = operation ===  '*' || operation === '/' ? 1 : 0
  return values.reduce((acc, value) => {
    value === 0 && operation === '*' || operation === '/' ? value = 1 : value
    operation === '+' ? acc += value
    : operation === '-' ? acc -= value
    : operation === '*' ? acc *= value
    : operation === '/' ? acc /= value
    : acc
    return acc
  }, defaultValues)
}

export const formatPrice = (price) => price.toLocaleString('es-AR', {
  style: 'currency',
  currency: 'ARS',
  minimumFractionDigits: 0
})

export const getResultAndFormattedPrice = (operation = '*', ...values) => {
  const result = getResult(operation, ...values)
  const formattedPrice = formatPrice(result)
  return { result, formattedPrice }
}

export const handlerChangeDate = (value, setValue, section, dispatch) => {
  setValue(value)
  const [start, end] = value
  const newDate = { start: start.toDateString(), end: end.toDateString() }
  section === 'hire' && dispatch(addStartAndEndDate(newDate))
}

export const handlerChangeServiceValue = (e, setErrors, setService) => {
  const service = e.target.value
  // serviceCareTakerValidations(service, setErrors)
  // dispatch(addServices(service))
  setService(prev => ({ ...prev, serviceName: service }))
}

export const handlerServiceNameAndDate = (service, dispatch, goToNextStep) => {
  const { serviceName, serviceDate } = service
  dispatch(addServices(serviceName))
  dispatch(addStartAndEndDate(serviceDate))
  goToNextStep()
}

export const getFormattedServiceDate = (dates) => {
  if (dates.start === '' || dates.end === '') return null
  const { start: startDate, end: endDate } = dates
  const start = new Date(startDate)
  const end = new Date(endDate)

  const startDay = start.getDate()
  const startMonth = start.toLocaleDateString('es-AR', { month: 'short' })
  const startYear = start.getFullYear()

  const endDay = end.getDate()
  const endMonth = end.toLocaleDateString('es-AR', { month: 'short' })
  const endYear = end.getFullYear()
  // Si el año y el mes son iguales, mostramos solo los días y una vez el mes y año
  if (startYear === endYear && startMonth === endMonth) return `Del ${startDay} al ${endDay} de ${startMonth} de ${startYear}`
  // Si solo el año es igual, mostramos el mes y día de cada fecha
  else if (startYear === endYear) return `Del ${startDay} de ${startMonth} al ${endDay} de ${endMonth} de ${startYear}`
  // Si ni el mes ni el año son iguales, mostramos ambas fechas completas
  else return `Del ${startDay} de ${startMonth} de ${startYear} al ${endDay} de ${endMonth} de ${endYear}`
}

export const formattedDatesWithSlashes = (dates) => {
  if (dates.start === '' || dates.end === '') return [null, null]
  return Object.values(dates).map(date => new Date(date).toLocaleDateString('es-AR', { day: '2-digit', month: '2-digit', year: 'numeric' }))
}

export const getNightsDifference = (dates) => {
  if (dates.start === '' || dates.end === '') return null
  const { start: startDate, end: endDate } = dates
  // Convertir las fechas a milisegundos
  const start = new Date(startDate)
  const end = new Date(endDate)
  // Calcular la diferencia en milisegundos
  const differenceInTime = end - start // La diferencia en milisegundos
  // Convertir de milisegundos a días (1 día = 24 * 60 * 60 * 1000 milisegundos)
  const differenceInDays = differenceInTime / (1000 * 60 * 60 * 24)
  return differenceInDays
}