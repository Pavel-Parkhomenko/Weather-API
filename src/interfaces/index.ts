export interface IWeatherDayState {
  dt: number,
  main: {
    temp: number
  },
  weather: [
    {
      id: number,
      main: string,
      description: string,
      icon: string
    }
  ],
  dt_txt: string
}

export interface IResponseApi {
  list: IWeatherDayState[],
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
  responseApi: IResponseApi | null,
  loading: boolean,
  error: string,
}

export interface IAction {
  type: string,
  payload: IResponseApi
}
