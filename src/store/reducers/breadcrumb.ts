import type { BreadcrumbState } from '@/types/utils'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const breadcrumbSlice = createSlice({
  name: 'breadcrumb',
  initialState: {
    dynamicItems: {}
  } as BreadcrumbState,
  reducers: {
    setDynamicItem: (state, action: PayloadAction<{ key: string; name: string }>) => {
      const { key, name } = action.payload
      state.dynamicItems[key] = name
    },
    removeDynamicItem: (state, action: PayloadAction<string>) => {
      delete state.dynamicItems[action.payload]
    },
    clearDynamicItems: (state) => {
      state.dynamicItems = {}
    }
  }
})

export const { setDynamicItem, removeDynamicItem, clearDynamicItems } = breadcrumbSlice.actions
const breadcrumbReducer = breadcrumbSlice.reducer
export default breadcrumbReducer
