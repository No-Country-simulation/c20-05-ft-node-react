import { createSlice } from '@reduxjs/toolkit'

const user = createSlice({
  name: 'user',
  initialState: {
    currentUser: null
  },
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload
    },
    logOutCurrentUser(state) {
      state.currentUser = null
    }
  },
})

export const { setCurrentUser, logOutCurrentUser } = user.actions
export default user.reducer