import styled from 'styled-components'
import googleIcon from '@/@types/svg/google.svg'

const CONTAINER_MIN_HEIGHT = '100px'
const SINGIN_GOOGLE_WIDTH = '150px'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: ${CONTAINER_MIN_HEIGHT};
  color: ${({ theme }) => theme.textColor.white};
`

export const EventContainer = styled.div`
  display: flex;
  align-items: center;
  
  & > div:first-child {
    margin-right: ${({ theme }) => theme.spaces[3]}px;
  }
`

export const SingInGoogle = styled.button`
  width: ${SINGIN_GOOGLE_WIDTH};
  background-color: transparent;
  margin-top: ${({ theme }) => theme.spaces[5]}px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.textColor.white};
  align-items: center;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.textColor.white};
  border-radius: 5px;
  box-shadow: 0 0 5px 3px rgba(109, 109, 115, 0.5);

  :before {
    content: '';
    background: url(${googleIcon}) no-repeat;
    height: 22px;
    width: 22px;
    text-align: left;
  }

  &:hover {
    border: 1px solid gray;
  }
`

export const MessageLoading = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[2]}px;;
  cursor: pointer;
  color: ${({ theme }) => theme.textColor.white};
`

export const SpanTextStyled = styled.p`
  word-wrap: break-word;
`
