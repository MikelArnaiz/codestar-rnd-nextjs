import { GetStaticPropsResult } from 'next'
import { BikeOverviewData } from '../domain/Bike'
import { bikesList } from '../data/bikesList'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { BikeOverview } from '../components/Bike/Bike'
import { BikesPageContainer, BikeContainer } from '../components/Bike/BikesPage'

type BikesPageProps = Readonly<{
  bikesList: BikeOverviewData[]
}>

export default function BikesPage(props: BikesPageProps) {
  const router = useRouter()

  const onClick = (id: string) => () => {
    router.push(`/bikes/${id}`)
  }

  return (
    <BikesPageContainer>
      <ListContainer>
        {props.bikesList.map((bike) => (
          <BikeContainer onClick={onClick(bike.id)}>
            <BikeOverview bike={bike} />
          </BikeContainer>
        ))}
      </ListContainer>
    </BikesPageContainer>
  )
}

export function getStaticProps(): GetStaticPropsResult<BikesPageProps> {
  return {
    props: {
      bikesList: bikesList,
    },
  }
}

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
  gap: 16px;
`
