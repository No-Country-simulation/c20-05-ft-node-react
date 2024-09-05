import { addPetForm } from "../../state/store/slices/pets/pet-form-slice"

export const handlerPetsFormValues = ({ name, value }, setForm, dispatchCallback, petNumber) => {
  setForm(prevState => (
    {
      ...prevState,
      [name]: value
    })
  )
  dispatchCallback(addPetForm({ petNumber, name, value }))
}