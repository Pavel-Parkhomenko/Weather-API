import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const DayContainer = styled.div`
  width: 50px;
  display: inline-block;
  padding: 3px 0 3px 0;
  color: white;
  background-color: #3a4250;
  border-radius: 50px;
  font-size: 14px;
  text-align: center;
`

export const Icon = styled.div<{iconUrl: string, isToday?: boolean}>`
  ${({ isToday }) => (isToday ? css`
    width: 100px;
    height: 130px;
  ` : css`
    width: 80px;
    height: 80px;
  `)}
  margin: 10px 0 10px 0;
  background: url(${({ iconUrl }) => iconUrl}) no-repeat 50% 50%;
  background-size: cover;
  
  @media(max-width: 968px){
    ${({ isToday }) => (isToday ? css`
    width: 80px;
    height: 110px;
  ` : css`
    width: 60px;
    height: 50px;
  `)}
  }
  
  @media(max-width: 568px) {
    width: 50px;
    height: 50px;
  }
`

export const Temperature = styled.h2`
  font-weight: normal;
  padding: 0;
  margin: 0;
`

export const TodayContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media(max-width: 568px) {
    flex-direction: column-reverse;
    align-items: center;
    & > div:first-child {
      margin-top: 0;
      margin-bottom: 30px;
    }
  }
`

export const TodayAndTemperature = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 60%;
  font-size: 30px;
  
  @media(max-width: 568px) {
    height: 90px;
    align-items: center;
    justify-content: space-between;
  }

  @media(max-width: 320px) {
    height: 60px;
    font-size: 14px;
  }
`
