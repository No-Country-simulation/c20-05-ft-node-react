import { addNumberOfPetForms, removeExtraInputs, removePetForm } from "../../state/store/slices/pets/pet-form-slice"

export const handlerGoToPetForm = (valueToGo, petFormRefs, currentPetFormInView, setCurrentNumberPetForm) => {
  petFormRefs?.current[valueToGo].scrollIntoView({ behavior: 'smooth' })
  currentPetFormInView = valueToGo
  setCurrentNumberPetForm(valueToGo)
}

export const handlerAddPetForm = (dispatchCallback, numberOfPetForms) => dispatchCallback(addNumberOfPetForms(numberOfPetForms + 1))

export const handlerRemovePetForm = (currentNumberPetForm, dispatchCallback, numberOfPetForms, setCurrentNumberPetForm) => {
  dispatchCallback(addNumberOfPetForms(numberOfPetForms - 1))
  dispatchCallback(removePetForm(currentNumberPetForm))
  dispatchCallback(removeExtraInputs(currentNumberPetForm))
  setCurrentNumberPetForm(currentNumberPetForm - 1)
}