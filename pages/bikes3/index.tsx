import { BikeData } from '../../domain/Bike'
import { useRouter } from 'next/router'
import { BikesPageContainer } from '../../components/Bike/BikesPage'
import styled from '@emotion/styled'
import { BikeOverview } from '../../components/Bike/BikeOverview'
import { GetStaticPropsResult } from 'next'
import { bikesEndpoint } from '../../constants/endpoints'

type Bikes3PageProps = Readonly<{
  data: BikeData[] | null
  error: string | null
}>

export default function Bikes3Page(props: Bikes3PageProps) {
  const router = useRouter()

  const onClick = (id: string) => () => {
    router.push(`/bikes3/${id}`)
  }

  if (!props.data || !props.data.length || props.error) {
    return (
      <div>
        Error.
        {props.error ? <p>{props.error}.</p> : null}
      </div>
    )
  }

  return (
    <BikesPageContainer>
      <h3>StaticPaths + StaticProps</h3>
      <ListContainer>
        {props.data.map((bike) => (
          <BikeOverview data={bike} onClick={onClick(bike.id)} key={bike.id} />
        ))}
      </ListContainer>
    </BikesPageContainer>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Bikes3PageProps>> {
  try {
    const response = await fetch(`${process.env.API_URL}${bikesEndpoint}`)
    const bikes = (await response.json()) as BikeData[]

    return {
      props: {
        data: bikes,
        error: null,
      },
    }
  } catch (err) {
    return {
      props: {
        data: null,
        error: err.message,
      },
    }
  }
}

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
  gap: 16px;
`
