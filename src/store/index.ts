import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux'
import thunk from 'redux-thunk'

import { weatherReducer } from './weatherReducer'
import { locationReducer } from './locationReducer'

const rootReducer = combineReducers({
  weatherReducer,
  locationReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
