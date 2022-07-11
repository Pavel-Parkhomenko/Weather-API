import { TypeWeather } from '@/constants'

export interface IParseLocation {
  city: {
    id: number,
    name: string,
  }
  country: string
}

export interface IParseWeather {
  dt: number,
  main: {
    temp: number
  },
  weather: [
    {
      id: number,
      main: string | TypeWeather,
      description: string,
      icon: string
    }
  ],
  dt_txt: string
}

export interface IResponseApi {
  list: IParseWeather[],
  city: {
    id: number,
    name: string,
    coord: {
      lat: number,
      lon: number
    },
    country: string
  }
}

export interface IWeatherState {
  weathers: IParseWeather[]
  loading: boolean,
  error: string,
}

export interface IDispatchWeather {
  type: string,
  payload?: IParseLocation | IParseWeather[] | string
}

export interface IGeolocation {
  latitude: number,
  longitude: number,
  country_name: string
}

export interface IWeatherOneDay {
  day: string,
  temperature: number,
  icon: string
}
