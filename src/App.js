import styled from 'styled-components'
import Routes from './routes'
import GlobalStyles from './styles/globalStyles'

function App() {
  return (
    <AppBody>
      <GlobalStyles />
      <Routes />
    </AppBody>
  )
}
const AppBody = styled.div`
  display: flex;
  height: 100vh;
`

export default App
