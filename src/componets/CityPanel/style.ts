import styled from 'styled-components'
import search from '@/@types/svg/search.svg'

const WIDTH_CONTAINER = '100%'
const MAX_WIDTH_CONTAINER = '200px'
const WIDTH_INPUT_CONTAINER = '100%'
const WIDTH_ICON = '45px'
const HEIGHT_ICON = '35px'
const WIDTH_INPUT = '100%'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  max-width: ${MAX_WIDTH_CONTAINER};
  width: ${WIDTH_CONTAINER};
`

export const InputContainer = styled.div`
  width: ${WIDTH_INPUT_CONTAINER};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  &:after {
    content: '';
    width: ${WIDTH_ICON};
    height: ${HEIGHT_ICON};
    background: url(${search}) no-repeat;
    background-size: cover;
  }
`
export const Input = styled.input`
  font-size: 40px;
  background-color: inherit;
  border: 0;
  color: white;
  text-align: right;
  width: ${WIDTH_INPUT};
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

export const Country = styled.p`
  color: white;
  font-size: 16px;
  margin: 0 45px 0 0;
`
