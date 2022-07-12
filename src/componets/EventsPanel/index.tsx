import React, { useEffect, useState } from 'react'
import { eventData } from '@/mocks'
import {
  EventContainerStyled,
  EventsContainerStyled, SpanTextStyled,
  TimePointStyled
} from './style'
import { useTypeSelector } from '@/hooks/useTypeSelector'
import { useAppDispatch } from '@/hooks/useActions'
import { fetchDataCalendar } from '@/store/actions'
import { apiCalendar } from '@/helpers'
import { Main } from '@/componets/Main'

export function EventsPanel() {
  const { loading, data, error } = useTypeSelector(state => state.calendarReducer)
  const dispatch = useAppDispatch()
  const [isSign, setIsSign] = useState(false)

  function handleSignIn() {
    setIsSign(true)
    // @ts-ignore
    apiCalendar.handleAuthClick()
  }

  function handleOnClick() {
    // @ts-ignore
    dispatch(fetchDataCalendar())
  }

  if (!isSign && data.result.items.length === 0) {
    return <button type="button" onClick={handleSignIn}>Sing In Google</button>
  }
  if (data.result.items.length === 0) {
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
    return <h1 onClick={handleOnClick}>loading</h1>
  }

  return (
    <div>
      {data.result.items.map((item, ind) => <h2 key={item.id}>{item.summary}</h2>)}
    </div>
  )

  // return (!isSign
  //   ? <button type="button" onClick={handleSignIn}>Loading Weather</button>
  //   : (
  //     <EventsContainerStyled>
  //       {eventData.map((event) => (
  //         <EventContainerStyled key={event.id}>
  //           <TimePointStyled>
  //             {event.time}
  //           </TimePointStyled>
  //           <SpanTextStyled>
  //             {data.result.items[0].summary}
  //           </SpanTextStyled>
  //         </EventContainerStyled>
  //       ))}
  //     </EventsContainerStyled>
  //   )
  // )
}
