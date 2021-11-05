import styled from 'styled-components'

import { BookmarkBorder, Palette } from '@material-ui/icons'
import { Avatar } from '@material-ui/core'

import SidebarOption from './SidebarOption'

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <HeaderAvatar />
      </SidebarHeader>
      {/* <hr /> */}
      <h3>Menu</h3>
      <SidebarOption
        Icon={Palette}
        title={'Mini Journal'}
        linkTo={'/'}
        active
      />
      <SidebarOption
        Icon={BookmarkBorder}
        title={'Projects'}
        linkTo={'/projects'}
      />
    </SidebarContainer>
  )
}

export default Sidebar

const SidebarContainer = styled.div`
  flex: 0.15;
  background-color: var(--white-color);
  color: var(--primaryDarken-color);

  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid var(--primary-color);
  }
  > h3 {
    margin-left: 1rem;
  }
`
const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px;
`
const HeaderAvatar = styled(Avatar)`
  margin-top: 15px;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`
