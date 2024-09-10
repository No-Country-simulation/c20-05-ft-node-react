import { useEffect, useState } from "react"
import { serviceCareTakerValidations } from "../functions/validations/serviceCareTakerValidations"
import { SERVICE_NAME_AND_DATE_VALUES } from "../../assets/other-assets/constants/form-resources"
import useNavigateHelper from "./useNavigateHelper"
import { useDispatch } from "react-redux"

export const useCaretakerProfileToHire = () => {
  const [servicesOptions, setServicesOptions] = useState([])
  const [service, setService] = useState(SERVICE_NAME_AND_DATE_VALUES)
  const [errors, setErrors] = useState()
  const dispatch = useDispatch()
  const { navigateTo } = useNavigateHelper()
  const goToNextStep = () => navigateTo('./hire')

  useEffect(() => {
    serviceCareTakerValidations(service, setErrors)
  }, [service])

  return { servicesOptions, setServicesOptions, service, setService, errors, setErrors, dispatch, goToNextStep }
}