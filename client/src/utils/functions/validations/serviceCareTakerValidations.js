import { caretakerProfileMock } from "../../../assets/other-assets/mocks/mockForProfile"
import { isValidValue } from "./extraValidations"

export const serviceCareTakerValidations = (service, setErrors) => {
  const errors = {}
  const { serviceName, serviceDate } = service
  const { serviceType } = caretakerProfileMock
  const allServices = serviceType.map(service => service.careType)
  
  if (!isValidValue(serviceName, allServices)) errors.serviceName = 'Seleccionar un servicio válido'
  if (serviceName === 'none') errors.serviceName = 'Seleccionar un servicio'
  if (!serviceDate) errors.serviceDate = 'Seleccionar una fecha'

  if (Object.keys(errors).length === 0) {
    setErrors(null)
    return true
  } else {
    setErrors(errors)
    return false
  }
}