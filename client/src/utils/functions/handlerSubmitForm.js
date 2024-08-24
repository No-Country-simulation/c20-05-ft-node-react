
import axiosInstace from '../../utils/functions/axiosInstance'
import { hasErrors } from './validations/extraValidations'

export const handlerSubmitForm = (e, data, path, errors) => {
  e.preventDefault()
  !hasErrors(errors) && axiosInstace.post(path, data)
}


