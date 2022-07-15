import React from 'react'
import {
  Container,
  Country,
  City,
} from './styled'
import { useTypeSelector } from '@/hooks/useTypeSelector'

export function CityPanel() {
  const { city, country } = useTypeSelector(state => state.locationReducer)
  return (
    <Container>
      <City>
        { city.name }
      </City>
      <Country>
        {country}
      </Country>
    </Container>
  )
}
