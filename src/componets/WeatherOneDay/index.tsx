import React, { useEffect, useState } from 'react'
import { TimePoint } from '@/componets/TimePoint'
import {
  Container,
  Icon,
  Temperature,
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

  return (
    <Container isToday={day}>
      <TimePoint variant="day">
        { day }
      </TimePoint>
      <Icon iconUrl={iconUrl} isToday />
      <Temperature>
        { temperature }
        °
      </Temperature>
    </Container>
  )
}
