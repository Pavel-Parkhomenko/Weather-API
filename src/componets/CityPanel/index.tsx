import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  CityContainerStyled,
  ListInputStyled
} from './style'
import { fetchWeatherByCoords } from '@/store/actions'

export function CityPanel() {
  const [geolocation, setGeolocation] = useState<{lat?: number, lon?: number}>({})
  const dispatch = useDispatch()
  const city = useSelector((state: any) => state.locationReducer.city)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setGeolocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude
      })
    })
  }, [])

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dispatch(fetchWeatherByCoords(geolocation))
  }, [dispatch, geolocation])

  return (
    <CityContainerStyled>
      <input type="text" value={city} list="mycoollist" />
      <datalist id="mycoollist">
        <option>i want to kill you</option>
        <option>i will kill you</option>
        <option>you will die</option>
        <option>i will be killed</option>
        <option>i will be dead</option>
      </datalist>
    </CityContainerStyled>
  )
}
