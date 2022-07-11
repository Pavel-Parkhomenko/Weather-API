import React, { useState } from 'react'
import {
  CityContainerStyled,
  CountryStyled,
  InputStyled,
  InputContainer,
} from './style'
import { useTypeSelector } from '@/hooks/useTypeSelector'
import { useAppDispatch } from '@/hooks/useActions'
import { fetchWeatherByCity } from '@/store/actions'
import search from '@/@types/svg/search.svg'

export function CityPanel() {
  const city = useTypeSelector(state => state.locationReducer.city.name)
  const country = useTypeSelector(state => state.locationReducer.country)
  const [cityInput, setCityInput] = useState(city)
  const dispatch = useAppDispatch()

  const handleKeyEnter = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      // @ts-ignore
      dispatch(fetchWeatherByCity(cityInput))
    }
  }

  const handleOnClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLDivElement).id === 'search') {
      // @ts-ignore
      dispatch(fetchWeatherByCity(cityInput))
    }
  }

  return (
    <CityContainerStyled>
      <InputContainer
        id="search"
        onClick={handleOnClick}
        onKeyDown={handleKeyEnter}
      >
        <InputStyled
          type="text"
          value={cityInput}
          onChange={(event) => setCityInput(event.target.value)}
        />
      </InputContainer>
      <CountryStyled>
        {country}
      </CountryStyled>
    </CityContainerStyled>
  )
}
