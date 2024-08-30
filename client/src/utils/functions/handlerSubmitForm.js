import axiosInstace from '../../utils/functions/axiosInstance'
import { handlerApiRequest } from './handlerApiRequest'
import { hasErrors } from './validations/extraValidations'

export const handlerSubmitForm = (e, data, pathApiRequest, toPath, apiRequestMsgsCategory, errors) => {
  e.preventDefault()
  !hasErrors(errors) && handlerApiRequest(axiosInstace.post(pathApiRequest, data), apiRequestMsgsCategory)
  axiosInstace.post(pathApiRequest, data)
}