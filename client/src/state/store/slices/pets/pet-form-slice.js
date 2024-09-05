import { createSlice } from '@reduxjs/toolkit'

const petFormSlice = createSlice({
  name: 'petForm',
  initialState: {
    forms: [],
    errors: 0,
    numberOfPetForms: 1,
    extraInputs: []
  },
  reducers: {
    addPetForm(state, action) {
      const { petNumber, form } = action.payload
      state.forms[petNumber] = form
    },
    addErrors(state, action) {
      const errors = action.payload
      state.errors = errors
    },
    addNumberOfPetForms(state, action) {
      state.numberOfPetForms = action.payload
    },
    addExtraInputs(state, action) {
      const { petNumber, extraInputs } = action.payload
      state.extraInputs[petNumber] = extraInputs
    },
  },
})

export const { addPetForm, addErrors, addNumberOfPetForms, addExtraInputs } = petFormSlice.actions
export default petFormSlice.reducer