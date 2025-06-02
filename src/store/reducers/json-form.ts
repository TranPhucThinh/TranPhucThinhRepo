import type { FormData, FormState } from '@/types/utils'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const formSlice = createSlice({
  name: 'json-form',
  initialState: {
    data: {} as FormData,
    schema: JSON.stringify({}, null, 2)
  },
  reducers: {
    updateField: (state, action: PayloadAction<{ fieldName: string; value: string | number | boolean }>) => {
      const { fieldName, value } = action.payload
      state.data[fieldName] = value
      localStorage.setItem('formStore', JSON.stringify(state))
    },
    updateSchema: (state, action: PayloadAction<string>) => {
      state.schema = action.payload
      localStorage.setItem('formStore', JSON.stringify(state))
    },
    resetForm: (state) => {
      state.data = {}
      state.schema = JSON.stringify({}, null, 2)
      localStorage.setItem('formStore', JSON.stringify(state))
    },
    loadFromStorage: (state, action: PayloadAction<FormState>) => {
      state.data = action.payload.data
      state.schema = action.payload.schema
    }
  }
})

export const { updateField, updateSchema, resetForm, loadFromStorage } = formSlice.actions
const formReducer = formSlice.reducer
export default formReducer
