import React, { useEffect } from 'react'
import { Main } from '@/componets/Main'
import { IGeolocation } from '@/interfaces'
import { fetchWeatherByCoords } from '@/store/actions'
import { useAppDispatch } from '@/hooks/useActions'
import { useTypeSelector } from '@/hooks/useTypeSelector'

export function Home() {
  const dispatch = useAppDispatch()
  const { loading } = useTypeSelector(state => state.weatherReducer)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://geolocation-db.com/json/')
      const data: IGeolocation = await response.json()
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      dispatch(fetchWeatherByCoords({ ...data }))
    }
    fetchData()
  }, [dispatch])

  return (loading ? <h1>Loading Weather</h1> : <Main />)
}
