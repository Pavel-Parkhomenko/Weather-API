import { IResponseApi, IParseWeather, IParseLocation } from '@/interfaces'

function parseApiWeather(response: IResponseApi) {
  const temp: IParseWeather[] = response.list
  const date = new Date()
  const curDate = date.getDate().toString()
  const weathers: IParseWeather[] = []
  weathers.push(temp[0])
  temp.forEach(weather => {
    const tempDate = weather.dt_txt.split(' ')[0].split('-')[2]
    if (curDate !== tempDate && weather.dt_txt.split(' ')[1] === '12:00:00') {
      weathers.push(weather)
    }
  })

  return weathers
}

function parseApiLocation(response: IResponseApi) {
  const location: IParseLocation = {
    city: { ...response.city },
    country: response.city.country
  }
  return location
}

export function parseApiResponse(response: IResponseApi) {
  const weathers = parseApiWeather(response)
  const location = parseApiLocation(response)
  return { weathers, location }
}
