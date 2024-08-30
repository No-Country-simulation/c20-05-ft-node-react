import axiosInstace from '../../utils/functions/axiosInstance'
import { handlerApiRequest } from './handlerApiRequest'
import { hasErrors } from './validations/extraValidations'

export const handlerSubmitForm = (e, data, pathApiRequest, apiRequestMsgsCategory, errors) => {
  e.preventDefault()
  if(hasErrors(errors)) return
  const res = handlerApiRequest(axiosInstace.post(pathApiRequest, data), apiRequestMsgsCategory)
  return res
}

