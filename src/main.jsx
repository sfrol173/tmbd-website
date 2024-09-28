import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import {PersistGate} from 'redux-persist/integration/react'; // підключаємо бібліотеку та дістаємо персит провайдер
import {persistore, store} from './store/index.js' // дістаємо сторінку редаксу та персиста і передаємо їх у потрібні провайдери


createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistore}>
				<BrowserRouter>
					<App/>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</StrictMode>,
)
