import { BikeStaticData, BikeBatteryData } from '../../domain/Bike'
import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next'
import { bikesStaticDataList } from '../../data/bikesList'
import { useState, useEffect } from 'react'

type BikePageProps = Readonly<{
  bike: BikeStaticData | null
}>

export default function BikePage(props: BikePageProps) {
  const [details, setDetails] = useState<BikeBatteryData>()

  if (props.bike === null) {
    return <div>No bike data</div>
  }

  useEffect(() => {
    async function getData() {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bikes/battery`)
      const json = await response.json()

      setDetails(json)
    }

    getData()
  }, [setDetails])

  return (
    <div>
      <h3>{props.bike.id}</h3>
      <div>
        <strong>Type</strong>: {props.bike.type} bike
      </div>

      {details ? (
        <>
          <div>
            <strong>Battery level</strong>: {details.batteryLevel}%
          </div>
          <div>
            <strong>Charging</strong>: {details.isCharging ? 'yes' : 'no'}
          </div>
        </>
      ) : (
        <span>Loading details</span>
      )}
    </div>
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
}: GetStaticPropsContext<StaticPathProps>): Promise<GetStaticPropsResult<BikePageProps>> {
  const errorResult = {
    props: {
      bike: null,
    },
  }

  if (!params?.id) {
    return errorResult
  }

  const bike = bikesStaticDataList.find((b) => b.id === params.id)
  if (bike === undefined) {
    return errorResult
  }

  return {
    props: {
      bike,
    },
  }
}
