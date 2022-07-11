import { IWeatherState, IParseWeather } from '@/interfaces'
import {
  ADD_WEATHER,
  ADD_WEATHER_SUCCESS,
  ADD_WEATHER_FAILED,
} from '@/constants'

const INITIAL_STATE: IWeatherState = {
  weathers: [],
  loading: true,
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
      return { ...state, loading: true, error: '' }
    case ADD_WEATHER_SUCCESS:
      return {
        ...state,
        weathers: action.payload,
        loading: false,
        error: ''
      }
    case ADD_WEATHER_FAILED:
      return { ...state, loading: false, error: 'Что-то пошло не так' }
    default:
      return state
  }
}
