import {
  createStore,
  combineReducers,
  applyMiddleware,
  AnyAction
} from 'redux'
import thunk, { ThunkDispatch } from 'redux-thunk'

import { weatherReducer } from './weatherReducer'
import { locationReducer } from './locationReducer'
import { calendarReducer } from './calendarReducer'

const rootReducer = combineReducers({
  weatherReducer,
  locationReducer,
  calendarReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>;
