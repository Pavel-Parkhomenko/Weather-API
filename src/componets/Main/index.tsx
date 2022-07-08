import React, { useEffect } from 'react'
import {
  MainContainerStyled,
  TimeAndEventsContainerStyled,
  TopMainContainerStyled
} from './style'
import { TimePanel } from '@/componets/TimePanel'
import { EventsPanel } from '@/componets/EventsPanel'
import { CityPanel } from '@/componets/CityPanel'

export function Main() {
  return (
    <MainContainerStyled>
      <TopMainContainerStyled>
        <TimeAndEventsContainerStyled>
          <TimePanel />
          <EventsPanel />
        </TimeAndEventsContainerStyled>
        <CityPanel />
      </TopMainContainerStyled>
    </MainContainerStyled>
  )
}
