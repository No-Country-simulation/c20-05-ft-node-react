import { ERROR_STATUS_CODE_DEFAULT } from "../../assets/other-assets/api-request-msgs"

export const handlerApiRequest = async (apiRequest, { successStatus, errorStatus }) => {
  try {
    const { data: dataApi, status: statusApi } = await apiRequest
    console.log(dataApi)
    const isStatusSuccess = successStatus[statusApi]
    const resMessage = isStatusSuccess?.message || errorStatus[statusApi]?.message
    if (!resMessage) return { status: ERROR_STATUS_CODE_DEFAULT, message: errorStatus[ERROR_STATUS_CODE_DEFAULT].message }
    const successObj = { status: statusApi, data: dataApi, message: resMessage }
    const errorObj = { status: statusApi, message: resMessage }
    return isStatusSuccess ? successObj : errorObj
  } catch (error) {
    console.log(error)
    const { message } = error?.response?.data || error
    // return { status: ERROR_STATUS_CODE_DEFAULT, message: errorStatus[ERROR_STATUS_CODE_DEFAULT] }
    return { status: ERROR_STATUS_CODE_DEFAULT, message }

  }
}