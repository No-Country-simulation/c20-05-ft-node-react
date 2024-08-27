import axiosInstace from '../../utils/functions/axiosInstance'
import { handlerApiRequest } from './handlerApiRequest'
import { hasErrors } from './validations/extraValidations'

export const handlerSubmitForm = (e, data, path, errors) => {
  e.preventDefault()
  !hasErrors(errors) && handlerApiRequest(axiosInstace.post(path, data), 'apiCategoryName')
}