import React from 'react'
import { Container } from '@/componets/WeatherPanel/styled'
import { WeatherOneDay } from '@/componets/WeatherOneDay'
import { ShortDays } from '@/constants'
import { IParseWeather } from '@/interfaces'

export function WeatherPanel({ weathers }: {weathers: IParseWeather[]}) {
  return (
    <Container>
      {weathers.map(({ dt, weather, main }, ind) => (
        <WeatherOneDay
          key={dt}
          day={ind === 0 ? 'TODAY' : ShortDays[new Date(dt * 1000).getDay()]}
          icon={weather[0].icon}
          temperature={Math.round(main.temp - 273)}
        />
      ))}
    </Container>
  )
}
