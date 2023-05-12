import { createSlice } from '@reduxjs/toolkit'

export const pagePosSlice = createSlice({
  name: 'navStyle',
  initialState: {
    isDark: false,
  },
  reducers: {
    setDark: (state, actions) => {
      state.isDark = actions.payload
    },
    removeDark: state => {
      state.isDark = false
    },
  },
})

export const { setDark, removeDark } = pagePosSlice.actions
export default pagePosSlice.reducer
export const selectNavStyle = (state) => state.navStyle
