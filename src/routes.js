import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import Categories from './components/Categories'
import styled from 'styled-components'

function Routes() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <MainWrapper>
            <Route path="/" component={Home} exact />
            <Route path="/projects" component={Categories} exact />
          </MainWrapper>
        </Switch>
      </Router>
    </>
  )
}

const MainWrapper = styled.div`
  margin-top: 5rem;
`

export default Routes
