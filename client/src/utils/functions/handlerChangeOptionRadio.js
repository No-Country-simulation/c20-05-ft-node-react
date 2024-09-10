import { addExtraInputs } from "../../state/store/slices/pets/pet-form-slice"

export const handlerChangeOptionRadio = ({ name, value }, extraInputs, dispatchCallback, petNumber) => {
  if (name === 'type') {
    value === 'Otro' ? dispatchCallback(addExtraInputs({ petNumber, name: 'type', value: true })) : dispatchCallback(addExtraInputs({ petNumber, name: 'type', value: false }))
  }
  name === 'pathologies' && dispatchCallback(addExtraInputs({ petNumber, name: 'pathologies_description', value: !extraInputs.pathologies_description }))
  name === 'medication' && dispatchCallback(addExtraInputs({ petNumber, name: 'medication_description', value: !extraInputs.medication_description }))
}
