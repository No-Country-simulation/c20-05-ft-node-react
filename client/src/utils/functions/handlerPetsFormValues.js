import { addPetForm } from "../../state/store/slices/pets/pet-form-slice"

export const handlerPetsFormValues = ({ name, value }, dispatchCallback, petNumber) => {
  // setForm(prevState => (
  //   {
  //     ...prevState,
  //     [name]: value
  //   })
  // )
  dispatchCallback(addPetForm({ petNumber, name, value }))
  // dispatchCallback(addPetForm(prevState => (
  //   // petNumber,
  //   {
  //     ...prevState,
  //     [name]: value
  //   }
  // )))
}