import styled from 'styled-components'

const Categories = () => {
  return (
    <CategoriesContainer>
      <List>
        <h2>Categories List</h2>
      </List>
    </CategoriesContainer>
  )
}
export default Categories

const CategoriesContainer = styled.div`
  background-color: var(--lightgray-color);
  display: flex;
  flex: 0.25;
  max-width: 300px;
`

const List = styled.div`
  flex-direction: column;
`
