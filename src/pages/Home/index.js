import styled from 'styled-components'
import Categories from '../../components/Categories'

const index = () => {
  return (
    <ContentWrapper>
      <Categories />
    </ContentWrapper>
  )
}

export default index

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
`
