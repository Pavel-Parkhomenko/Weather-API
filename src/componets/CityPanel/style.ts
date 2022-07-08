import styled from 'styled-components'

const City = ['aaaa', 'bbbb', 'scccc']

export const CityContainerStyled = styled.div`
  background: beige;
  margin-top: 30px;
`

export const ListInputStyled = styled.input.attrs({
  type: 'text',
  list: City
})`
  width: 50px;
`
