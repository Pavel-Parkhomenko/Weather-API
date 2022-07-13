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
  color: ${({ theme }) => theme.textColor.light};
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
  font-size: ${({ theme }) => theme.fontSizes[6]}px;
  background-color: inherit;
  color: inherit;
  border: 0;
  text-align: right;
  width: ${WIDTH_INPUT};
  margin-right: ${({ theme }) => theme.spaces[2]}px;
  padding: 0;
  :active, :hover, :focus {
    outline: 0;
    outline-offset: 0;
  }

  @media(max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes[5]}px;
  }
`

export const Country = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  margin-right: ${({ theme }) => theme.spaces[6] - 5}px;
`
