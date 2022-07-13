import React, { useEffect, useState } from 'react'
import { ThreeCircles } from 'react-loader-spinner'
import { Main } from '@/componets/Main'
import { fetchWeatherByCoords } from '@/store/actions'
import { useAppDispatch } from '@/hooks/useActions'
import { useTypeSelector } from '@/hooks/useTypeSelector'
import { ContainerLoader } from './styled'

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
        const response = await fetch('https://api.ipgeolocation.io/ipgeo?apiKey=b76eb0deed054b03bfe659dfb1761024')
        const data = await response.json()
        await dispatch(fetchWeatherByCoords(data))
      } catch (err) {
        setIsError('Возникла проблема. Возможно вы не в сети')
      }
    }
    getLocation()
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
