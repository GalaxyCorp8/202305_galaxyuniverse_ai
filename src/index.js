import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import './index.css'
import GlobalStyles from './components/GlobalStyles'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import store from './hooks/store'
import './i18n/i18n'
import ScrollToTop from './components/ScrollToTop'

let persistor = persistStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<>
		<Provider store={store}>
			<PersistGate
				loading={null}
				persistor={persistor}
			>
				<BrowserRouter>
					<GlobalStyles />
					<ScrollToTop />
					<App />
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
