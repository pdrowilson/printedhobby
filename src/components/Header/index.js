import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { Button as Btn, Avatar as AvatarIcon } from '@material-ui/core'
import { Book } from '@material-ui/icons'

const Header = () => {
  let history = useHistory()

  const toHome = () => {
    history.push('/')
  }

  const toProjects = () => {
    history.push('/projects')
  }
  return (
    <>
      <HeaderContainer>
        <HeaderLeft>
          <Logo onClick={toHome}>
            <h2>Printed Hobby</h2>
          </Logo>
        </HeaderLeft>
        <HeaderRight>
          <MenuSeparator />
          <Button onClick={toProjects}>
            <Book fontSize="small" />
            Projects
          </Button>
          <Avatar variant="rounded">PW</Avatar>
        </HeaderRight>
      </HeaderContainer>
    </>
  )
}

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  color: var(--white-color);
  background-color: var(--lightgray-color);
  z-index: 999;
`

const Logo = styled.div`
  cursor: pointer;
  > h2 {
    /* font-size: 1rem; */
    color: var(--white-color);
    :hover {
      color: var(--primary-color) !important;
    }
  }
`
const HeaderLeft = styled.div`
  flex: 0.2;
  display: flex;
  align-items: center;
  margin-left: 30px;
`
const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  padding-left: 10px;
  margin-right: 30px;
`
const MenuSeparator = styled.div`
  border: 1px solid #fafafa;
  width: 1px;
  height: 2rem;
  margin: 0 0.9rem;
`
const Button = styled(Btn)`
  color: white !important;
  :hover {
    background-color: var(--gray-color) !important;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  .MuiSvgIcon-root {
    margin-right: 10px;
  }
`
const Avatar = styled(AvatarIcon)`
  cursor: pointer;
  margin-left: auto;
  background-color: var(--primary-color) !important;
`

export default Header
