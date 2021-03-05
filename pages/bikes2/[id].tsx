import { BikeBatteryData, BikeData } from '../../domain/Bike'
import { Bike } from '../../components/Bike/Bike'
import { GetServerSidePropsResult, GetServerSidePropsContext } from 'next'
import { bikesStaticDataList } from '../../data/bikesList'
import { batteryEndpoint } from '../../constants/endpoints'

type BikePageProps = Readonly<{
  bike: BikeData | null
}>

export default function Bike2Page(props: BikePageProps) {
  return (
    <>
      <h3>ServerSideProps</h3>
      <Bike bike={props.bike} />
    </>
  )
}

type StaticPathProps = {
  id: string
}

export async function getServerSideProps(
  context: GetServerSidePropsContext<StaticPathProps>,
): Promise<GetServerSidePropsResult<BikePageProps>> {
  const bike = bikesStaticDataList.find((b) => b.id === context.params?.id)

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
