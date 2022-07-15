import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: flex-end;
  color: ${({ theme }) => theme.textColor.light};
`

export const City = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes[6]}px;
  margin: 0;
`

export const Country = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  margin: 0;
`
