import React, { useEffect, useState } from 'react'
import {
  Container, TodayAndTemperature, DayContainer, Icon, Temperature, TodayContainer
} from '@/componets/WeatherOneDay/styled'
import { IWeatherOneDay } from '@/interfaces'

export function WeatherOneDay({ day, temperature, icon }: IWeatherOneDay) {
  const [iconUrl, setIconUrl] = useState('')

  useEffect(() => {
    fetch(`https://openweathermap.org/img/wn/${icon}@2x.png`)
      .then(res => res.blob())
      .then(blob => {
        const img = URL.createObjectURL(blob)
        setIconUrl(img)
      })
  }, [icon])

  if (day === 'TODAY') {
    return (
      <TodayContainer>
        <Icon iconUrl={iconUrl} isToday />
        <TodayAndTemperature>
          <DayContainer>
            { day }
          </DayContainer>
          <Temperature>
            { temperature }
            °
          </Temperature>
        </TodayAndTemperature>
      </TodayContainer>
    )
  }
  return (
    <Container>
      <DayContainer>
        { day }
      </DayContainer>
      <Icon iconUrl={iconUrl} />
      <Temperature>
        { temperature }
        °
      </Temperature>
    </Container>
  )
}
