import { createSlice } from '@reduxjs/toolkit'
import { INITIAL_SATATE_PETS_FORM_INPUTS } from '../../../../assets/other-assets/constants/form-resources'
import { EXTRA_INPUTS } from '../../../../assets/other-assets/constants/pets-form-resources'

const petFormSlice = createSlice({
  name: 'petForm',
  initialState: {
    forms: [INITIAL_SATATE_PETS_FORM_INPUTS],
    errors: 0,
    numberOfPetForms: 1,
    extraInputs: [EXTRA_INPUTS]
  },
  reducers: {
    addPetForm(state, action) {
      const { petNumber, name, value } = action.payload
      if (!state.forms[petNumber]) state.forms[petNumber] = INITIAL_SATATE_PETS_FORM_INPUTS
      state.forms[petNumber] = {
        ...state.forms[petNumber],
        [name]: value
      }
    },
    removePetForm(state, action) {
      const petNumber = action.payload
      state.forms = state.forms.filter((_, index) => index !== petNumber)
    },
    addErrors(state, action) {
      const errors = action.payload
      state.errors = errors
    },
    addNumberOfPetForms(state, action) {
      state.numberOfPetForms = action.payload
    },
    addNewPetForm(state) {
      state.forms.push(INITIAL_SATATE_PETS_FORM_INPUTS)
      state.extraInputs.push(EXTRA_INPUTS)
    },
    addExtraInputs(state, action) {
      const { petNumber, name, value } = action.payload
      state.extraInputs[petNumber] = {
        ...state.extraInputs[petNumber],
        [name]: value
      }
    },
    removeExtraInputs(state, action) {
      const petNumber = action.payload
      state.extraInputs = state.extraInputs.filter((_, index) => index !== petNumber)
    },
  },
})

export const { addPetForm, removePetForm, addErrors, addNewPetForm, addNumberOfPetForms, addExtraInputs, removeExtraInputs } = petFormSlice.actions
export default petFormSlice.reducer