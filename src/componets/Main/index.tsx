import React from 'react'
import {
  MainContainerStyled,
  TimeAndEventsContainerStyled,
  TopMainContainerStyled
} from './style'
import { TimePanel } from '@/componets/TimePanel'
import { EventsPanel } from '@/componets/EventsPanel'

export function Main() {
  return (
    <MainContainerStyled>
      <TopMainContainerStyled>
        <TimeAndEventsContainerStyled>
          <TimePanel />
          <EventsPanel />
        </TimeAndEventsContainerStyled>
      </TopMainContainerStyled>
    </MainContainerStyled>
  )
}
