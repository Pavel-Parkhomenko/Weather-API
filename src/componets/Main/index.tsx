import React from 'react'
import {
  Container,
  MainStyled,
  TimeAndEventsContainerStyled,
  TopMainContainerStyled,
} from './styled'
import { TimePanel } from '@/componets/TimePanel'
import { EventsPanel } from '@/componets/EventsPanel'
import { CityPanel } from '@/componets/CityPanel'
import { CitySearch } from '@/componets/CitySearch'
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
          <CitySearch />
          <TimeAndEventsContainerStyled>
            <TimePanel />
            <CityPanel />
          </TimeAndEventsContainerStyled>
          <EventsPanel />
        </TopMainContainerStyled>
        <WeatherPanel weathers={weathers} />
      </MainStyled>
    </Container>
  )
}
