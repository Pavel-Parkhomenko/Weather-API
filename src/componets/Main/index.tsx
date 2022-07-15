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
  const { weathers } = useTypeSelector(state => state.weatherReducer)
  const nameCity = useTypeSelector(state => state.locationReducer.city.name)

  return (
    <Container>
      <MainStyled
        typeWeather={weathers.length === 0 ? 'Default' : weathers[0].weather[0].main as TypeWeather}
      >
        <TopMainContainerStyled>
          <CitySearch nameCity={nameCity} />
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
