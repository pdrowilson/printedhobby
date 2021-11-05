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
    --primary-color: #3f74f6;
    --primaryDarken-color: #151d31;
    --secondary-color: #25b3c9;
    --white-color: #fafafa;
    --lightgray-color: #ebeef7;
    background: #f1f2fa;
    color: #585e6c;
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
