import { IAction, IWeatherState } from '@/interfaces'
import {
  ADD_WEATHER,
  ADD_WEATHER_SUCCESS,
  ADD_WEATHER_FAILED, ADD_CITY
} from '@/constants'

const INITIAL_STATE: IWeatherState = {
  responseApi: null,
  loading: false,
  error: '',
}

export function weatherReducer(state = INITIAL_STATE, action: IAction) {
  switch (action.type) {
    case ADD_WEATHER:
      return { ...state, loading: true, error: null }
    case ADD_WEATHER_SUCCESS:
      return {
        ...state,
        responseApi: { ...action.payload },
        loading: false,
        error: null
      }
    case ADD_WEATHER_FAILED:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}
