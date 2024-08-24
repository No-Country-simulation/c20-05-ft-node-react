// create a store for redux toolkit
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import usersReducer from './slices/users/users-slice'

const rootReducer = combineReducers({
  users: usersReducer
}) 

export const store = configureStore({
  reducer: rootReducer
})

export default store