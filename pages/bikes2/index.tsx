import { GetServerSidePropsResult } from 'next'
import { BikeData } from '../../domain/Bike'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { BikesPageContainer } from '../../components/Bike/BikesPage'
import { BikeOverview } from '../../components/Bike/Bike'

type BikesPageProps = Readonly<{
  data: BikeData[]
}>

export default function Bikes2Page(props: BikesPageProps) {
  const router = useRouter()

  const onClick = (id: string) => () => {
    router.push(`/bikes/${id}`)
  }

  return (
    <BikesPageContainer>
      <ListContainer>
        {props.data.map((bike) => (
          <BikeOverview data={bike} onClick={onClick(bike.id)} key={bike.id} />
        ))}
      </ListContainer>
    </BikesPageContainer>
  )
}

export async function getServerSideProps(): Promise<GetServerSidePropsResult<BikesPageProps>> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bikes`)
  const json = await response.json()

  return {
    props: {
      data: json,
    },
  }
}

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
  gap: 16px;
`
