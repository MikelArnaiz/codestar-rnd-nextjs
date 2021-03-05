import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next'
import { bikesStaticDataList } from '../../data/bikesList'
import { Bike } from '../../components/Bike/Bike'
import { BikeData, BikeBatteryData } from '../../domain/Bike'
import { batteryEndpoint } from '../../constants/endpoints'

type Bike3PageProps = Readonly<{
  bike: BikeData | null
}>

export default function Bike3Page(props: Bike3PageProps) {
  return (
    <>
      <h3>StaticPaths + StaticProps</h3>
      <Bike bike={props.bike} />
    </>
  )
}

type StaticPathProps = {
  id: string
}

export function getStaticPaths(): GetStaticPathsResult<StaticPathProps> {
  const paths = bikesStaticDataList.map((bike) => ({
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
}: GetStaticPropsContext<StaticPathProps>): Promise<GetStaticPropsResult<Bike3PageProps>> {
  const bike = bikesStaticDataList.find((b) => b.id === params?.id)

  if (bike === undefined) {
    return {
      props: {
        bike: null,
      },
    }
  }

  const response = await fetch(`${process.env.API_URL}${batteryEndpoint}`)
  const batteryData = (await response.json()) as BikeBatteryData

  return {
    props: {
      bike: {
        ...bike,
        ...batteryData,
      },
    },
  }
}
