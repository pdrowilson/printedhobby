import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const SidebarOption = ({ Icon, title, linkTo }) => {
  let history = useHistory()

  const routePush = () => {
    if (linkTo) {
      history.push(linkTo)
    }
  }

  return (
    <SidebarOptionContainer onClick={routePush}>
      {Icon && (
        <>
          <Icon />
          <h3>{title}</h3>
        </>
      )}
    </SidebarOptionContainer>
  )
}

export default SidebarOption

const SidebarOptionContainer = styled.div`
  display: flex;
  font-size: 12px;
  color: #acacac;
  align-items: center;
  cursor: pointer;
  padding: 10px 0;

  :hover {
    > h3 {
      color: var(--primaryDarken-color);
    }
    > .MuiSvgIcon-root {
      color: var(--primary-color);
    }
  }

  > .MuiSvgIcon-root {
    margin-left: 1.5rem;
    font-size: 1.6rem;
  }

  > h3 {
    padding-left: 1rem;
  }
`
