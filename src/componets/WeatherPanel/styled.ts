import styled from 'styled-components'

export const Container = styled.div`
  background-color: rgba(128, 120, 136, 0.9);
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 50px 0 50px;
  max-height: 250px;
  height: 100%;

  @media(max-width: 992px) {
    padding: 0 25px 0 25px;
  }

  @media(max-width: 568px) {
    //padding: 0 10px 0 10px;
    //flex-direction: column; // !!!
  }
`
