import { combineReducers } from '@reduxjs/toolkit'
import formReducer from './json-form'

export const rootReducer = combineReducers({
  jsonForm: formReducer
})
