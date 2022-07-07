import React from 'react'
import {
  EventContainerStyled,
  EventsContainerStyled, SpanTextStyled,
  TimePointStyled
} from './style'

const eventData = [
  {
    time: '8:00',
    event: 'It is too early to do something',
    id: 1
  },
  {
    time: '12:00',
    event: 'A call with a mentor',
    id: 2
  },
  {
    time: '18:00',
    event: 'Complain about life',
    id: 3
  }
]

export function EventsPanel() {
  return (
    <EventsContainerStyled>
      {eventData.map((event) => (
        <EventContainerStyled key={event.id}>
          <TimePointStyled>
            {event.time}
          </TimePointStyled>
          <SpanTextStyled>
            {event.event}
          </SpanTextStyled>
        </EventContainerStyled>
      ))}
    </EventsContainerStyled>
  )
}
