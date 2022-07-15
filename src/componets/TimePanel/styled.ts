import styled from 'styled-components'

const CONTAINER_MAX_WIDTH = '600px'

export const Container = styled.div`
  max-width: ${CONTAINER_MAX_WIDTH};
  color: ${({ theme }) => theme.textColor.light};
`
export const TimeStyled = styled.div`
  display: inline;
  font-size: ${({ theme }) => theme.fontSizes[7]}px;
`

export const TextStyled = styled.span`
`
