import React, { useEffect, useState } from 'react'
import { ThreeCircles } from 'react-loader-spinner'
import { Main } from '@/componets/Main'
import { fetchWeatherByCoords } from '@/store/actions'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { useTypeSelector } from '@/hooks/useTypeSelector'
import { ContainerLoader } from './styled'
import { KEY_GEOLOCATION } from '@/constants'

export function Home() {
  const dispatch = useAppDispatch()
  const { loading, error } = useTypeSelector(state => state.weatherReducer)
  const [isError, setIsError] = useState('')

  if (isError) {
    throw Error(isError)
  }
  if (error) {
    throw Error(error)
  }

  useEffect(() => {
    const getLocation = async () => {
      try {
        const response = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${KEY_GEOLOCATION}`)
        const data = await response.json()
        await dispatch(fetchWeatherByCoords(data))
      } catch (err) {
        setIsError('Возникла проблема. Возможно вы не в сети')
      }
    }
    const localStorageData = localStorage.getItem('persist:weather')
    if (!localStorageData) {
      getLocation()
    }
  }, [dispatch])

  return (
    <>
      { loading
        ? (
          <ContainerLoader>
            <ThreeCircles
              color="red"
              outerCircleColor="blue"
              middleCircleColor="green"
              innerCircleColor="grey"
            />
          </ContainerLoader>
        )
        : null }
      <Main />
    </>
  )
}
