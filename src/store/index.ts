import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { weatherReducer } from './weatherReducer'

const rootReducer = combineReducers({
  weatherReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
