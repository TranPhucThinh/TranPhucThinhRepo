import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type TableState = {
  data: Record<string, string>[]
  currentPage: number
  filters: Record<string, string>
  sort: {
    column: string | null
    order: 'asc' | 'desc'
  }
}

const initialState: TableState = {
  data: [],
  currentPage: 1,
  filters: {},
  sort: { column: null, order: 'asc' }
}

const saveStateToLocalStorage = (state: TableState) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('tableState', serializedState)
  } catch (error) {
    console.error('Error saving state to localStorage:', error)
  }
}

const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    setDataTable: (state, action: PayloadAction<Record<string, string>[]>) => {
      state.data = action.payload
      saveStateToLocalStorage(state)
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
      saveStateToLocalStorage(state)
    },
    setFilter: (state, action: PayloadAction<{ column: string; value: string }>) => {
      state.filters[action.payload.column] = action.payload.value
      saveStateToLocalStorage(state)
    },
    setSort: (state, action: PayloadAction<{ column: string; order: 'asc' | 'desc' }>) => {
      state.sort = action.payload
      saveStateToLocalStorage(state)
    },
    clearFilters: (state) => {
      state.filters = {}
      state.sort = { column: null, order: 'asc' }
      saveStateToLocalStorage(state)
    }
  }
})

export const { setDataTable, setPage, setFilter, setSort, clearFilters } = tableSlice.actions
const tableReducer = tableSlice.reducer
export default tableReducer
