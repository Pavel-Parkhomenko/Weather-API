import {
  createStore,
  combineReducers,
  applyMiddleware,
  AnyAction
} from 'redux'
import thunk, { ThunkDispatch } from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { weatherReducer } from './weatherReducer'
import { locationReducer } from './locationReducer'
import { calendarReducer } from './calendarReducer'

const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: ['weatherReducer', 'calendarReducer'],
}

const weatherPersistConfig = {
  key: 'weathers',
  storage,
  blacklist: ['error', 'loading']
}

const rootReducer = combineReducers({
  weatherReducer: persistReducer(weatherPersistConfig, weatherReducer),
  locationReducer,
  calendarReducer
})

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk))
export const persistorStore = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>;
