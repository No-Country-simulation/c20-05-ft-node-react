import { ERROR_STATUS_CODE_DEFAULT } from "../../assets/other-assets/api-request-msgs"

export const handlerApiRequest = async (apiRequest, { successStatus, errorStatus }) => {
  try {
    const { data: dataApi, status: statusApi } = await apiRequest
    const isStatusSuccess = successStatus[statusApi]
    const resMessage = isStatusSuccess?.message || errorStatus[statusApi]?.message
    if (!resMessage) return { status: ERROR_STATUS_CODE_DEFAULT, message: errorStatus[ERROR_STATUS_CODE_DEFAULT].message }
    const successObj = { status: statusApi, data: dataApi, message: resMessage }
    const errorObj = { status: statusApi, message: resMessage }
    return isStatusSuccess ? successObj : errorObj
  } catch {
    return { status: ERROR_STATUS_CODE_DEFAULT, message: errorStatus[ERROR_STATUS_CODE_DEFAULT].message }
  }
}