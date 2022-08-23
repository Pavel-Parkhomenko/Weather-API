import styled from 'styled-components'
import FontFront from '@/@types/img/fon-3.jpg'
import FontFrontMobile from '@/@types/img/fon-mobile.jpg'
import Clear from '@/@types/img/clear.jpg'
import Rain from '@/@types/img/rain.jpg'
import Extreme from '@/@types/img/extreme.jpg'
import Clouds from '@/@types/img/clouds-2.jpg'
import Snow from '@/@types/img/snow.jpg'
import { TypeWeather } from '@/constants'

const CONTAINER_HEIGHT = '100vh'
const MAIN_HEIGHT = '80%'
const MAIN_WIDTH = '100%'
const MAIN_MAX_WIDTH = '900px'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${FontFront});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: ${CONTAINER_HEIGHT};
  
  @media(max-width: 518px) {
    background-image: url(${FontFrontMobile});
  } 
`

export const MainStyled = styled.div<{typeWeather: keyof typeof TypeWeather | 'Default'}>`
  background-image: url(${({ typeWeather }) => {
    switch (typeWeather) {
      case TypeWeather.Rain: return Rain
      case TypeWeather.Clear: return Clear
      case TypeWeather.Clouds: return Clouds
      case TypeWeather.Snow: return Snow
      case TypeWeather.Extreme: return Extreme
      default: return FontFront
    }
  }});
  height: ${MAIN_HEIGHT};
  width: ${MAIN_WIDTH};
  max-width: ${MAIN_MAX_WIDTH};
  margin-left: ${({ theme }) => theme.spaces[6] + 10}px;
  margin-right: ${({ theme }) => theme.spaces[6] + 10}px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-position-x: 100%;
  
  @media(max-height: 705px) {
    height: 100%;
  }

  @media(max-width: 568px) {
    height: 80vh;
  }
`

export const TimeAndEventsContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media(max-width: 568px) {
    flex-direction: column;
    align-items: center;
    height: 175px;
  }
`

export const TopMainContainerStyled = styled.div`
  display: flex;
  padding: 0 10% 0 10%;
  flex-direction: column;

  @media(max-width: 992px) {
    padding: 0 5% 0 5%;
  }
`
