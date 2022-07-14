import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  flex-direction: column;
  background-color: #2a1a34;
  color: white;
`

export const Message = styled.h2`
  @media(max-width: 536px) {
    width: 250px;
  }
`

export const ButtonToBack = styled.button`
  height: 50px;
  border-radius: 25px;
  box-shadow: 0 0 5px 5px #b9a46c;
  border: 0;
  cursor: pointer;

  :hover {
    background-color: #d9cfcf;
  }
`
