import { IWeatherState, IParseWeather } from '@/interfaces'
import {
  ADD_WEATHER,
  ADD_WEATHER_SUCCESS,
  ADD_WEATHER_FAILED,
} from '@/constants'

const INITIAL_STATE: IWeatherState = {
  weathers: [],
  loading: false,
  error: '',
}

export function weatherReducer(
  state = INITIAL_STATE,
  action: {
    type: string,
    payload: IParseWeather[]
  }
) : IWeatherState {
  switch (action.type) {
    case ADD_WEATHER:
      return { ...state, loading: true }
    case ADD_WEATHER_SUCCESS:
      return {
        ...state,
        weathers: action.payload,
        loading: false,
        error: ''
      }
    case ADD_WEATHER_FAILED:
      return {
        ...state, loading: false, error: `Что-то пошло не так.
        Возможно вы ввели несуществующий город`
      }
    default:
      return state
  }
}