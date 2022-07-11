import styled from 'styled-components'
import search from '@/@types/svg/search.svg'

export const CityContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  max-width: 200px;
  width: 100%;
`

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  &:after {
    content: '';
    width: 45px;
    height: 35px;
    //margin-right: -35px;
    background: url(${search}) no-repeat;
    background-size: cover;
  }
`
export const InputStyled = styled.input`
  font-size: 40px;
  background-color: inherit;
  border: 0;
  color: white;
  text-align: right;
  width: 100%;
  margin-right: 10px;
  padding: 0;
  :active, :hover, :focus {
    outline: 0;
    outline-offset: 0;
  }

  @media(max-width: 768px) {
    font-size: 30px;
  }
`

export const CountryStyled = styled.p`
  color: white;
  font-size: 16px;
  margin: 0 45px 0 0;
`
