import { useRouter } from 'next/router'
import { BikesPageContainer } from '../../components/Bike/BikesPage'
import styled from '@emotion/styled'
import { BikeOverview } from '../../components/Bike/BikeOverview'
import { bikesDataList } from '../../data/bikesList'

export default function Bikes4Page() {
  const router = useRouter()

  const onClick = (id: string) => () => {
    router.push(`/bikes4/${id}`)
  }

  return (
    <BikesPageContainer>
      <h3>StaticProps</h3>
      <ListContainer>
        {bikesDataList.map((bike) => (
          <BikeOverview data={bike} onClick={onClick(bike.id)} key={bike.id} />
        ))}
      </ListContainer>
    </BikesPageContainer>
  )
}

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
  gap: 16px;
`
