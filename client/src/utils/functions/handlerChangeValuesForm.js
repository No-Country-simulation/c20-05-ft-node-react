import { handlerChangeOptionRadio } from "./handlerChangeOptionRadio"
import { handlerPetsFormValues } from "./handlerPetsFormValues"
import { petsFormValidations } from "./validations/petsFormValidations"

export const handlerChangeValuesForm = (e, form, dispatchCallback, setErrors, petNumber, extraInputs) => {
  const { name, value, type } = e.target
  handlerPetsFormValues({name, value}, dispatchCallback, petNumber)
  petsFormValidations(form, setErrors, extraInputs)
  type === 'radio' && handlerChangeOptionRadio({ name, value }, extraInputs, dispatchCallback, petNumber)
}