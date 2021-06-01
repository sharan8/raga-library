import styled, {createGlobalStyle } from "styled-components"
import Clock from 'react-clock'
import 'react-clock/dist/Clock.css';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #282c34;
    font-family: Vollkorn;
  }
`

export const GlobalWrapper = styled.div`
  display: flex;
`

export const RagaNavComponentWrapper = styled.div`
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
`

export const NavigationWrapper = styled.div`
  width: 100%;
`

export const RagaViewComponentWrapper = styled.div`
  color: #fff;
  padding: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 80%;
`

export const RagaTitle = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  h1 {
      font-size: 50px;
  }
`

export const RagaDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

export const RagaAroAvro = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  h1 {
    display: flex;
    font-size: 64px;
    color: aquamarine;
    margin-bottom: 5px;
  }
  span {
    display: flex;
    align-items: center;
  }
  p {
    font-weight: normal;
    margin: 0;
    color: white;
  }
`

export const RagaDescription = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  box-sizing: border-box;
  align-items: center;
  padding: 30px;
  p {
    font-size: 30px;
    font-style: italic;
    line-height: 1.4;
  }
`

export const StyledClock = styled(Clock)`
  display: flex;
  width: 33%;
  .react-clock__border {
    background-color: antiquewhite;
  }
  
  .react-clock__mark__body {
    background-color: antiquewhite;
  }
  
  .react-clock__hour-hand__body {
    background-color: antiquewhite;
  }
  
  .react-clock__minute-hand__body {
    background-color: antiquewhite;
  }
`

export const DescriptionTime = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding-left: 150px;
`

export const DescriptionRasa = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding-right: 150px;
`

export const DescriptionText = styled.div`
  display: flex;
  justify-content: center;
`

export const FlexBreak = styled.div`
  display: flex;
  flex-basis: 100%;
  height: 0;
`
