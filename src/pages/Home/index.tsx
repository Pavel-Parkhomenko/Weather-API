import React from 'react'
import { HomeContainerStyled } from './style'
import { Main } from '@/componets/Main'

export function Home() {
  return (
    <HomeContainerStyled>
      <Main />
    </HomeContainerStyled>
  )
}

/*
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=94a02e927f7a6862591f4816ff0872f9')
        const data = await response.json()
        console.log('data')
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])
 */
