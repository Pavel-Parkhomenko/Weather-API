import styled from 'styled-components'

const CONTAINER_HEIGHT = '100%'
const CONTAINER_MAX_HEIGHT = '250px'

export const Container = styled.div`
  background-color: rgba(128, 120, 136, 0.8);
  color: ${({ theme }) => theme.textColor.light};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: ${({ theme }) => theme.spaces[5]}px;
  padding-right: ${({ theme }) => theme.spaces[5]}px;
  max-height: ${CONTAINER_MAX_HEIGHT};
  height: ${CONTAINER_HEIGHT};

  @media(max-width: 992px) {
    padding-left: ${({ theme }) => theme.spaces[4]}px;
    padding-right: ${({ theme }) => theme.spaces[4]}px;
  }

  @media(max-width: 568px) {
    padding: 0;
  }
`
