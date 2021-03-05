import styled from '@emotion/styled'

export const BikesPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
  justify-content: center;
`

export const BikeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 8px;
  background-color: lightblue;
  border-radius: 8px;

  &:hover {
    cursor: pointer;
  }
`
