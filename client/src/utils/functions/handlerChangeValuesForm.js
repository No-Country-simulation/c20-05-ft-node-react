import { handlerChangeOptionRadio } from "./handlerChangeOptionRadio"
import { handlerPetsFormValues } from "./handlerPetsFormValues"
import { petsFormValidations } from "./validations/petsFormValidations"

export const handlerChangeValuesForm = (e, form, setForm, setErrors, petNumber, extraInputs, setExtraInputs, dispatchCallback) => {
  const { name, value, type } = e.target
  handlerPetsFormValues({name, value}, setForm, dispatchCallback, petNumber)
  petsFormValidations(form, setErrors, extraInputs)
  type === 'radio' && handlerChangeOptionRadio({name, value}, extraInputs, setExtraInputs)
}