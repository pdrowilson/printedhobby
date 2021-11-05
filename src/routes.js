import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import styled from 'styled-components'

function Routes() {
  return (
    <>
      <Router>
        <Sidebar />
        <Switch>
          <MainWrapper>
            <Route path="/" component={Home} exact />
            <Route path="/projects" component={Projects} exact />
          </MainWrapper>
        </Switch>
      </Router>
    </>
  )
}

const MainWrapper = styled.div`
  display: flex;
  /* background-color: lightslategrey; */
  flex: 0.85;
`

export default Routes
