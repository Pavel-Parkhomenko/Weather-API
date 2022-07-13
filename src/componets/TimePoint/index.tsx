import React from 'react'
import { Container } from './styled'

interface ITimePoint {
  children: string,
  variant: 'day' | 'time'
}

export function TimePoint({ children, variant }: ITimePoint) {
  return (
    <Container variant={variant}>
      { children }
    </Container>
  )
}
