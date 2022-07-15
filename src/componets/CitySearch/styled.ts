import styled from 'styled-components'
import AsyncSelect from 'react-select/async'

export const AsyncSelectStyled = styled(AsyncSelect)`
  background-color: green;
`

export const Container = styled.div`
  margin-top: 15px;
  margin-bottom: 30px;
  display: flex;
  justify-content: right;

  & > div:first-child {
    width: 200px;
  }
`
