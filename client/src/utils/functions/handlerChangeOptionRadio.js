export const handlerChangeOptionRadio = ({name, value}, extraInputs, setExtraInputs) => {
  name === 'type' && value === 'Otro' ? setExtraInputs({ ...extraInputs, type: true }) : setExtraInputs({ ...extraInputs, type: false })
  name === 'pathologies' && setExtraInputs({ ...extraInputs, pathologies_description: !extraInputs.pathologies_description })
  name === 'medication' && setExtraInputs({ ...extraInputs, medication_description: !extraInputs.medication_description })
}
