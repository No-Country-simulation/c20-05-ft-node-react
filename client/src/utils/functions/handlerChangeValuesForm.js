import { addPetForm } from "../../state/store/slices/pets/pet-form-slice"
import { handlerFormValues } from "./handlerFormValues"
import { petsFormValidations } from "./validations/petsFormValidations"

export const handlerChangeValuesForm = (e, form, setForm, setErrors, petNumber, extraInputs, dispatchCallback) => {
  handlerFormValues(e, setForm)
  petsFormValidations(form, setErrors, extraInputs)
  dispatchCallback(addPetForm({ petNumber, form }))
}