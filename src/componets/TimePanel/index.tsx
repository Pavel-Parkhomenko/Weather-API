import React, { useEffect, useState } from 'react'
import {
  TextStyled,
  TimeContainerStyled,
  TimeStyled
} from './style'
import { Months, Days } from '@/constants'

export function TimePanel() {
  function getTime() {
    const date = new Date()
    const hours = (date.getHours() < 10) ? `0${date.getHours()}` : date.getHours()
    const minutes = (date.getMinutes() < 10) ? `0${date.getMinutes()}` : date.getMinutes()
    return { hours, minutes }
  }

  function getDate() {
    const date: Date = new Date()
    return {
      year: date.getFullYear(),
      month: date.getMonth(),
      date: date.getDate(),
      day: date.getDay()
    }
  }

  const [timeNow, setTimeNow] = useState(getTime())
  const [dateNow] = useState(getDate())

  useEffect(() => {
    const time = setInterval(() => {
      setTimeNow(getTime())
    }, 1000)
    return () => clearInterval(time)
  }, [])

  return (
    <TimeContainerStyled>
      <TimeStyled>
        {timeNow.hours}
      </TimeStyled>
      <TimeStyled>
        :
      </TimeStyled>
      <TimeStyled>
        {timeNow.minutes}
      </TimeStyled>
      <TextStyled> pm </TextStyled>
      <div>
        <TextStyled>{`${Days[dateNow.day - 1]}, ${dateNow.date} ${Months[dateNow.month]} ${dateNow.year}`}</TextStyled>
      </div>
    </TimeContainerStyled>
  )
}
