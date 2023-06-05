import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'

import navStyle from './navStyle'
import language from './language'

const reducers = combineReducers({
	navStyle,
	language,
})

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['navStyle', 'language'],
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
	reducer: persistedReducer,
	devTools: process.env.NODE_ENV !== 'production',
	middleware: [thunk],
})

export default store
