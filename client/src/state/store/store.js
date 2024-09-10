// create a store for redux toolkit
import { configureStore } from '@reduxjs/toolkit'
import petFormReducer from './slices/pets/pet-form-slice'
import hireCareTakerReducer from './slices/hire/hire-slice'

export const store = configureStore({
  reducer: {
    petForm: petFormReducer,
    hireCareTaker: hireCareTakerReducer,
  }
})

export default store