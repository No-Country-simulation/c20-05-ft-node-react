import { API_REQUEST_MSGS } from "../../assets/other-assets/api-request-msgs"
import { API_PATHS } from "../../routes/routes"
import { handlerSubmitForm } from "./handlerSubmitForm"

export const handlerSubmitRegisterForm = async (e, form, formState, setFormState, errors) => {
  setFormState({ ...formState, isLoading: true })
  const { status, message } = await handlerSubmitForm(e, form, API_PATHS.register, API_REQUEST_MSGS.register, errors)
  console.log('status', status)
  console.log('message', message)
  if (status === 201) setFormState({ ...formState, isLoading: false, isSent: true })
}