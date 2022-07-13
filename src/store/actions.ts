import { Dispatch } from 'redux'
import {
  ADD_WEATHER,
  ADD_WEATHER_SUCCESS,
  ADD_WEATHER_FAILED,
  ADD_LOCATION,
  ADD_DATA_CALENDAR,
  ADD_DATA_CALENDAR_SUCCESS,
  ADD_DATA_CALENDAR_FAILED,
  KEY
} from '@/constants'
import { parseApiResponse } from '@/helpers/parseApiResponse'
import {
  IDispatchCalendar,
  IDispatchWeather,
  IGeolocation
} from '@/interfaces'
import { apiCalendar } from '@/helpers'

const getLongNameCountry = async (shortName: string) => {
  const url = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/country'
  const token = '31967f9b76831d4b2c9743fb6559a2ff3d39e100'
  const query = shortName

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Token ${token}`
    },
    body: JSON.stringify({ query })
  })
  const data = await response.json()
  return data.suggestions[0].value
}

export const fetchWeatherByCoords = ({
  latitude, longitude
}: IGeolocation) => async (dispatch: Dispatch<IDispatchWeather>) => {
  try {
    dispatch({ type: ADD_WEATHER })
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${KEY}`
    )
    const data = await response.json()
    const { weathers, location } = parseApiResponse(data)
    location.country = await getLongNameCountry(location.country) as string
    dispatch({ type: ADD_LOCATION, payload: location })
    dispatch({ type: ADD_WEATHER_SUCCESS, payload: weathers })
  } catch (err) {
    dispatch({ type: ADD_WEATHER_FAILED, payload: 'Что-то пошло не так' })
  }
}

// eslint-disable-next-line max-len
export const fetchWeatherByCity = (city: string) => async (dispatch: Dispatch<IDispatchWeather>) => {
  try {
    dispatch({ type: ADD_WEATHER })
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${KEY}`
    )
    const data = await response.json()
    const { weathers, location } = parseApiResponse(data)
    location.country = await getLongNameCountry(location.country) as string
    dispatch({ type: ADD_LOCATION, payload: location })
    dispatch({ type: ADD_WEATHER_SUCCESS, payload: weathers })
  } catch (err) {
    dispatch({ type: ADD_WEATHER_FAILED })
  }
}

// eslint-disable-next-line max-len
export const fetchDataCalendar = () => async (dispatch: Dispatch<IDispatchCalendar>) => {
  try {
    dispatch({ type: ADD_DATA_CALENDAR })
    const response = await apiCalendar.listUpcomingEvents(3)
    dispatch({ type: ADD_DATA_CALENDAR_SUCCESS, payload: { data: response } })
  } catch (err) {
    dispatch({ type: ADD_DATA_CALENDAR_FAILED })
  }
}