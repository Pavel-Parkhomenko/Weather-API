import {
  ADD_WEATHER_FAILED,
  ADD_WEATHER_SUCCESS,
  ADD_WEATHER,
  KEY,
  ADD_CITY
} from '@/constants'

export const fetchWeatherByCity = (city: string) => async (dispatch: any) => {
  try {
    dispatch({ type: ADD_WEATHER })
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`)
    const data = await response.json()
    console.log(data)
    dispatch({ type: ADD_WEATHER_SUCCESS, payload: data })
  } catch (err) {
    dispatch({ type: ADD_WEATHER_FAILED, payload: err })
  }
}

interface ICoords
{
  lat: number,
  lon: number
}

export const fetchWeatherByCoords = (coords: ICoords) => async (dispatch: any) => {
  try {
    console.log(coords)
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${KEY}`
    )
    const data = await response.json()
    console.log(data)
    dispatch({ type: ADD_CITY, payload: data.name })
    dispatch({ type: ADD_WEATHER_SUCCESS, payload: data })
  } catch (err) {
    dispatch({ type: ADD_WEATHER_FAILED, payload: err })
  }
}
