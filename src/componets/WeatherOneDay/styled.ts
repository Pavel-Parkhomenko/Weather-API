import styled, { css } from 'styled-components'

const ICON_TODAY_WIDTH = '100px'
const ICON_TODAY_HEIGHT = '130px'
const ICON_TODAY_WIDTH_MEDIA = '80px'
const ICON_TODAY_HEIGHT_MEDIA = '110px'
const ICON_WIDTH = '80px'
const ICON_HEIGHT = '80px'
const ICON_WIDTH_MEDIA = '60px'
const ICON_HEIGHT_MEDIA = '50px'

export const Container = styled.div<{isToday?: string}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${({ isToday }) => (isToday === 'TODAY' ? css`
    background-color: rgba(128, 120, 136, 0.4);
    max-width: 200px;
    width: 100%;
  ` : css`
  `)}
`

export const Icon = styled.div<{iconUrl: string, isToday?: boolean}>`
  ${({ isToday }) => (isToday ? css`
    width: ${ICON_TODAY_WIDTH};
    height: ${ICON_TODAY_HEIGHT};
  ` : css`
    width: ${ICON_WIDTH};
    height: ${ICON_HEIGHT};
  `)}
  margin-top: ${({ theme }) => theme.spaces[3]}px;
  margin-bottom: ${({ theme }) => theme.spaces[3]}px;
  background: url(${({ iconUrl }) => iconUrl}) no-repeat 50% 50%;
  background-size: cover;
  
  @media(max-width: 968px){
    ${({ isToday }) => (isToday ? css`
    width: ${ICON_TODAY_WIDTH_MEDIA};
    height: ${ICON_TODAY_HEIGHT_MEDIA};
  ` : css`
    width: ${ICON_WIDTH_MEDIA};
    height: ${ICON_HEIGHT_MEDIA};
  `)}
  }
  
  @media(max-width: 568px) {
    width: 50px;
    height: 50px;
  }
`

export const Temperature = styled.h2`
  font-weight: normal;
  padding: 0;
  margin: 0;
`
