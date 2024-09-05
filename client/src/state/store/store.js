// create a store for redux toolkit
import { configureStore } from '@reduxjs/toolkit'
import petFormReducer from './slices/pets/pet-form-slice'

export const store = configureStore({
  reducer: {
    petForm: petFormReducer
  }
})

export default store