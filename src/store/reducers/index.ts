import { combineReducers } from '@reduxjs/toolkit'
import formReducer from './json-form'
import tableReducer from './table'

export const rootReducer = combineReducers({
  jsonForm: formReducer,
  table: tableReducer
})
