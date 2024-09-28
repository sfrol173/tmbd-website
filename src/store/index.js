import {configureStore,combineReducers} from '@reduxjs/toolkit'
import tvReducer from './slices/tv.slice'
import cinemaReducer from './slices/cinema.slice.js'
import appReducer from './slices/app.slice.js'
import {thunk} from 'redux-thunk';
import logger from "redux-logger";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const rootReducer = combineReducers({ // за допомогою функції combineReducers об'єднуємо всі ред'юсери в один для зручності
    app: appReducer,
    tv: tvReducer,
    cinema: cinemaReducer,
})

const persistConfig = { // створюємо конфіг персиста
    key: 'root',
    storage, // створюємо ініш сторедж порожній {} також можна додати певні дані або виключати з локал стореджа, за замовчуванням персист додає все
    // blacklist: ['navigation'], // navigation will not be persisted
    // whitelist: ['navigation'] // only navigation will be persisted
}

const persistedReducer = persistReducer(persistConfig, rootReducer) // створюємо персист редюсер на основі інішів стореджа та редюсерів

export const store = configureStore({ // об'єднуємо персист із нашим редаксом
    reducer: persistedReducer,
})

export const persistore = persistStore(store) // створюємо персист стор


