import React, { useState } from 'react'
import { TimePoint } from '@/componets/TimePoint'
import {
  EventContainer,
  Container,
  SingInGoogle,
  MessageLoading,
  SpanTextStyled
} from './styled'
import { useTypeSelector } from '@/hooks/useTypeSelector'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { fetchDataCalendar } from '@/store/actions'
import { apiCalendar } from '@/helpers'

export function EventsPanel() {
  const { data } = useTypeSelector(state => state.calendarReducer)
  const dispatch = useAppDispatch()
  const [isSign, setIsSign] = useState(false)

  function handleSignIn() {
    setIsSign(true)
    apiCalendar.handleAuthClick()
  }

  function parseTime(start: string): string {
    const temp = new Date(start)
    return `${temp.getHours()}:${temp.getMinutes()}`
  }

  function handleOnClick() {
    dispatch(fetchDataCalendar())
  }

  if (!isSign && data.result.items.length === 0) {
    return (
      <SingInGoogle
        onClick={() => handleSignIn()}
      >
        Sing In Google
      </SingInGoogle>
    )
  }
  if (data.result.items.length === 0) {
    return (
      <MessageLoading
        onClick={() => handleOnClick()}
      >
        Click here to show events
      </MessageLoading>
    )
  }

  return (
    <div>
      <Container>
        {data.result.items.map((item) => (
          <EventContainer key={item.id}>
            <TimePoint variant="time">
              {`${parseTime(item.start.dateTime)}-${parseTime(item.end.dateTime)}`}
            </TimePoint>
            <SpanTextStyled>
              {item.summary}
            </SpanTextStyled>
          </EventContainer>
        ))}
      </Container>
    </div>
  )
}
