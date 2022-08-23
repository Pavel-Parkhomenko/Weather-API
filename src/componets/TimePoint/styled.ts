import styled, { css } from 'styled-components'

const TIME_POINT_TIME_WIDTH = '80px'
const TIME_POINT_DAY_WIDTH = '50px'

export const Container = styled.div<{variant: 'day' | 'time'}>`
  display: inline-block;
  color: ${({ theme }) => theme.textColor.light};
  background-color: ${({ theme }) => theme.bgColor.lightDark};
  border-radius: ${({ theme }) => theme.spaces[6]}px;
  font-size: ${({ theme }) => theme.fontSizes[1]}px;
  text-align: center;
  padding: ${({ theme }) => theme.spaces[1]}px;
  min-width: ${({ variant }) => (variant === 'day' 
    ? TIME_POINT_DAY_WIDTH 
    : TIME_POINT_TIME_WIDTH
  )};

  @media(max-width: 568px) {
    ${({ variant }) => (variant === 'day'
    ? css`
      min-height: auto;
      min-width: 10px;
      writing-mode: vertical-lr;
      text-orientation: upright;`
    : css``
  )};
  }
`
