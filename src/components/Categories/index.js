import styled from 'styled-components'

const Categories = () => {
  return (
    <CategoriesContainer>
      <List>
        <li>SciFi</li>
        <li>Fantasy</li>
        <li>Modern</li>
      </List>
    </CategoriesContainer>
  )
}
const CategoriesContainer = styled.div`
  display: flex;
`

const List = styled.div`
  flex-direction: column;
`

export default Categories
