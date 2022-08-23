import React, { useState, useEffect } from 'react'
import AsyncSelect from 'react-select/async'
import { KEY } from '@/constants'
import { Container } from '@/componets/CitySearch/styled'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { fetchWeatherByCity } from '@/store/actions'

interface IAsyncSelect {
  value: string,
  label: string
}

// в документации по этому поводу ничего нет, поэтому пока что(навсегда) так
const customStyles = {
  option: (provided: any, state: { isSelected: boolean }) => ({
    ...provided,
    color: state.isSelected ? 'red' : 'blue',
    borderRadius: 10,
  })
}

export function CitySearch({ nameCity }: { nameCity: string }) {
  const dispatch = useAppDispatch()
  const [valueSelect, serValueSelect] = useState({ value: nameCity, label: nameCity })

  useEffect(() => {
    serValueSelect({ value: nameCity, label: nameCity })
  }, [nameCity])

  const promiseOptions = async (inputValue: string): Promise<IAsyncSelect[]> => {
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${inputValue}&limit=5&appid=${KEY}`
    )
    const data = await response.json()
    return data.map((item: { name: string }) => ({ value: item.name, label: item.name }))
  }

  const handleSelect = (value: IAsyncSelect | null) => {
    if (value) dispatch(fetchWeatherByCity(value.value))
    else if (valueSelect) dispatch(fetchWeatherByCity(valueSelect.value))
  }

  const handleInputChange = (newValue: string) => {
    serValueSelect({ value: newValue, label: newValue })
    return newValue
  }

  return (
    <Container>
      <AsyncSelect
        cacheOptions
        defaultOptions
        value={valueSelect}
        loadOptions={promiseOptions}
        onChange={handleSelect}
        noOptionsMessage={() => null}
        onInputChange={handleInputChange}
        styles={customStyles}
        theme={(theme) => ({
          ...theme,
          borderRadius: 10,
          colors: {
            ...theme.colors,
            primary25: '#bfb2c2',
            primary: 'gray',
          },
        })}
      />
    </Container>
  )
}
