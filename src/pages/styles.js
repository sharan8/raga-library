import styled, {createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #282c34;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`

export const MainComponent = styled.div`
  color: #fff;
  padding: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

export const RagaTitle = styled.div`
  width: 100%;
  display: flex;
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
  h1 {
    display: flex;
    font-size: 64px;
    margin-bottom: 5px;
  }
  margin-bottom: 20px;
`

export const RagaDescription = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 30px;
  p {
    font-size: 30px;
    font-style: italic;
    line-height: 1.4;
  }
`

export const FlexBreak = styled.div`
  display: flex;
  flex-basis: 100%;
  height: 0;
`
