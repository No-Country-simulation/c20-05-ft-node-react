import { createSlice } from '@reduxjs/toolkit'

const hireSlice = createSlice({
  name: 'hireCareTaker',
  initialState: {
    selectedPets: [],
    confirmServices: {
      date: {
        start: '',
        end: ''
      },
      services: ''
    },
    extraServices: [],
    paymentMethod: {
      cardOwner: '',
      cardNumber: '',
      expiryDate: '',
      cvv: ''
    }
  },
  reducers: {
    addAndRemoveSelectedPets: (state, action) => {
      const newPetId = action.payload      
      const selectedPets = state.selectedPets
      selectedPets.includes(newPetId)
        ? selectedPets.splice(selectedPets.indexOf(newPetId), 1)
        : selectedPets.push(newPetId)
    },
    addStartAndEndDate: (state, action) => {
      const { start, end } = action.payload
      const newDate = { start, end }
      state.confirmServices = { ...state.confirmServices, date: newDate }
    },
    addServices: (state, action) => {
      state.confirmServices.services = action.payload
    },
    addExtraServices: (state, action) => {
      state.extraServices = action.payload
    },
  }
})

export const { addAndRemoveSelectedPets, addStartAndEndDate, addServices, addExtraServices } = hireSlice.actions
export default hireSlice.reducer