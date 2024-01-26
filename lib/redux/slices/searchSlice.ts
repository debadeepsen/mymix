// /* Core */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: SearchSliceState = {
  searchResults: []
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchResults: (state, action: PayloadAction<any[]>) => {
      state.searchResults = action.payload
    }
  }
})

/* Types */
export type SearchSliceState = {
  searchResults: any[]
}
