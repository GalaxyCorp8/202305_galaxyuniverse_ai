import { createSlice } from '@reduxjs/toolkit'

export const languageSlice = createSlice({
	name: 'language',
	initialState: {
		lang: 'ko',
	},
	reducers: {
		setLang: (state, actions) => {
			state.lang = actions.payload
		},
		removeLang: (state) => {
			state.lang = false
		},
	},
})

export const { setLang, removeLang } = languageSlice.actions
export default languageSlice.reducer
export const selectLanguage = (state) => state.language.lang
