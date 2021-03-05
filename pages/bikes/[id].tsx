import { BikeStaticData, BikeBatteryData } from '../../domain/Bike'
import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next'
import { bikesStaticDataList } from '../../data/bikesList'
import { useState, useEffect } from 'react'
import { Bike } from '../../components/Bike/Bike'
import { batteryEndpoint } from '../../constants/endpoints'

type BikePageProps = Readonly<{
  bike: BikeStaticData | null
}>

export default function BikePage(props: BikePageProps) {
  const [details, setDetails] = useState<BikeBatteryData>()

  useEffect(() => {
    async function getData() {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${batteryEndpoint}`)
      const json = await response.json()

      setDetails(json)
    }

    getData()
  }, [setDetails])

  const bike =
    props.bike === null
      ? null
      : {
          ...props.bike,
          ...details,
        }

  return (
    <>
      <h3>client side fetch + StaticPaths + StaticProps</h3>
      <Bike bike={bike} />
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
