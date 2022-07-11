import React from 'react'
import {
  Container,
  MainStyled,
  TimeAndEventsContainerStyled,
  TopMainContainerStyled,
} from './style'
import { TimePanel } from '@/componets/TimePanel'
import { EventsPanel } from '@/componets/EventsPanel'
import { CityPanel } from '@/componets/CityPanel'
import { WeatherPanel } from '@/componets/WeatherPanel'
import { useTypeSelector } from '@/hooks/useTypeSelector'
import { TypeWeather } from '@/constants'

export function Main() {
  const { loading, weathers } = useTypeSelector(state => state.weatherReducer)

  return (
    <Container>
      <MainStyled
        typeWeather={loading ? 'Default' : weathers[0].weather[0].main as TypeWeather}
      >
        <TopMainContainerStyled>
          <TimeAndEventsContainerStyled>
            <TimePanel />
            <CityPanel />
          </TimeAndEventsContainerStyled>
          <EventsPanel />
        </TopMainContainerStyled>
        <WeatherPanel />
      </MainStyled>
    </Container>
  )
}
