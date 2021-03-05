import { BikeOverviewData } from '../../domain/Bike'
import { BikeOverview } from '../../components/Bike/Bike'
import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next'
import { bikesList } from '../../data/bikesList'

type BikePageProps = Readonly<{
  bike: BikeOverviewData | null
}>

export default function BikePage(props: BikePageProps) {
  if (props.bike === null) {
    return <div>No bike data</div>
  }

  return (
    <div>
      <BikeOverview bike={props.bike} />
    </div>
  )
}

// NEXTJS SERVER SIDE PART
// ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️
type StaticPathProps = {
  id: string
}

export function getStaticPaths(): GetStaticPathsResult<StaticPathProps> {
  const paths = bikesList.map((bike) => ({
    params: {
      id: bike.id,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<StaticPathProps>): Promise<GetStaticPropsResult<BikePageProps>> {
  const errorResult = {
    props: {
      bike: null,
    },
  }

  if (!params?.id) {
    return errorResult
  }

  const bike = bikesList.find((b) => b.id === params.id)
  if (bike === undefined) {
    return errorResult
  }

  return {
    props: {
      bike,
    },
  }
}
