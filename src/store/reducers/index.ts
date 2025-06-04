import { combineReducers } from '@reduxjs/toolkit'
import formReducer from './json-form'
import tableReducer from './table'
import breadcrumbReducer from './breadcrumb'

export const rootReducer = combineReducers({
  jsonForm: formReducer,
  table: tableReducer,
  breadcrumb: breadcrumbReducer
})
