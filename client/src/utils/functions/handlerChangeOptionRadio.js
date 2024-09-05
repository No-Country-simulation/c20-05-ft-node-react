import { handlerFormValues } from "./handlerFormValues"

export const handlerChangeOptionRadio = (e, setForm, extraInputs, setExtraInputs) => {
  e.target.name === 'type' && e.target.value === 'Otro' ? setExtraInputs({ ...extraInputs, type: true }) : setExtraInputs({ ...extraInputs, type: false })
  e.target.name === 'pathologies' && setExtraInputs({ ...extraInputs, pathologies_description: !extraInputs.pathologies_description })
  e.target.name === 'medication' && setExtraInputs({ ...extraInputs, medication_description: !extraInputs.medication_description })
  handlerFormValues(e, setForm)
}
