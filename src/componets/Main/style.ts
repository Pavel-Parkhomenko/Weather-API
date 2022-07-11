import styled from 'styled-components'
import FontFront from '@/@types/img/fon-3.jpg'
import FontFrontMobile from '@/@types/img/fon-mobile.jpg'
import Clear from '@/@types/img/clear.jpg'
import Rain from '@/@types/img/rain.jpg'
import Extreme from '@/@types/img/extreme.jpg'
import Clouds from '@/@types/img/clouds-2.jpg'
import Snow from '@/@types/img/snow.jpg'
import { TypeWeather } from '@/constants'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${FontFront});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: 100vh;
  
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
  height: 80%;
  width: 100%;
  max-width: 900px;
  margin: 0 75px 0 75px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  @media(max-height: 705px) {
    height: 100%;
  }
`

export const TimeAndEventsContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const TopMainContainerStyled = styled.div`
  display: flex;
  padding: 10% 10% 0 10%;
  justify-content: space-between;
  flex-direction: column;

  @media(max-width: 992px) {
    padding: 10% 5% 0 5%;
  }
`
