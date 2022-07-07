import styled from 'styled-components'
import BackgroundFon from '@/@types/img/background-1.jpg'

export const HomeContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${BackgroundFon});
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh;
`
