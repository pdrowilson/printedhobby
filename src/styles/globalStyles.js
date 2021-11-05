import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    height: 100%;
  }
  body {
    --primary-color: #d1bd09;
    --secondary-color: #25b3c9;
    --white-color: #fafafa;
    --gray-color: #1f1f22;
    --lightgray-color: #272729;
    background: #1c1d21;
    color: #dddddd;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font: 400 16px 'Sora', sans-serif;
  }
  #root {
    min-height: 100vh;
    display:flex;
    flex-direction: column;
  }
`

export default GlobalStyles
