import React from 'react'
import { eventData } from '@/mocks'
import {
  EventContainerStyled,
  EventsContainerStyled, SpanTextStyled,
  TimePointStyled
} from './style'

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
