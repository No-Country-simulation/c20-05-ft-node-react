import { createSlice } from '@reduxjs/toolkit'
import { INITIAL_SATATE_PETS_FORM_INPUTS } from '../../../../assets/other-assets/constants/form-resources'

const userInfoFormSlice = createSlice({
  name: 'userInfoForm',
  initialState: {
    forms: [],
    errors: 0,
    numberOfPetForms: 1,
    extraInputs: []
  },
  reducers: {
    addPetForm(state, action) {
      const { petNumber, name, value } = action.payload

      console.log('value', value)


      console.log('name', name)

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
    addExtraInputs(state, action) {
      const { petNumber, extraInputs } = action.payload
      state.extraInputs[petNumber] = extraInputs
    },
  },
})

export const { addPetForm, removePetForm, addErrors, addNumberOfPetForms, addExtraInputs } = userInfoFormSlice.actions
export default userInfoFormSlice.reducer