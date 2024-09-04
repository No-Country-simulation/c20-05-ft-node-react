import { createSlice } from '@reduxjs/toolkit'

const petFormSlice = createSlice({
  name: 'petForm',
  initialState: {},
  reducers: {
    addPetForm(state, action) {
      const { uid, form } = action.payload
      state[uid] = form
    }
  },
})

export const { addPetForm } = petFormSlice.actions
export default petFormSlice.reducer