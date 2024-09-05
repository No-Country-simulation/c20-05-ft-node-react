import { addNumberOfPetForms } from "../../state/store/slices/pets/pet-form-slice"

export const handlerGoToPetForm = (valueToGo, petFormRefs, currentPetFormInView, setCurrentNumberPetForm) => {
  petFormRefs?.current[valueToGo].scrollIntoView({ behavior: 'smooth' })
  currentPetFormInView = valueToGo
  setCurrentNumberPetForm(valueToGo)
}

export const handlerAddPetForm = (dispatchCallback, numberOfPetForms) => dispatchCallback(addNumberOfPetForms(numberOfPetForms + 1))
