import React, { useEffect, useState } from 'react'
import { TimePoint } from '@/componets/TimePoint'
import {
  Container,
  TodayAndTemperature,
  Icon,
  Temperature,
  TodayContainer
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
          <TimePoint variant="day">
            { day }
          </TimePoint>
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
      <TimePoint variant="day">
        { day }
      </TimePoint>
      <Icon iconUrl={iconUrl} />
      <Temperature>
        { temperature }
        °
      </Temperature>
    </Container>
  )
}
