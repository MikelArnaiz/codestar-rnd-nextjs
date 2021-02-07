import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next'
import { sensorsList } from '../../data/sensorsList'
import styled from '@emotion/styled'
import { SensorJSON } from '../api/sensors/[id]'

type SensorDetailsPageProps = Record<string, unknown> | null

export default function SensorDetailsPage(props: SensorDetailsPageProps) {
  if (props === null) {
    return <p>Error</p>
  }

  return (
    <SensorDetailsContainer>
      <h2>Sensor {props.id}</h2>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </SensorDetailsContainer>
  )
}

type StaticPath = Readonly<{
  id: string
}>

export function getStaticPaths(): GetStaticPathsResult<StaticPath> {
  const paths = sensorsList.map((sensor) => ({
    params: {
      id: sensor.id.toString(), // must match filename param, e.g. [id].tsx
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

async function getDataWithDelay(id: string) {
  const response = await fetch(`${process.env.API_URL}/api/sensors/${id}`)
  const result = await response.json()

  console.log(`data sensor ${id} ready`)

  return new Promise<SensorJSON>((resolve) => {
    setTimeout(() => {
      console.log(`resolve data sensor ${id}`)
      resolve(result)
    }, 5000)
  })
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<StaticPath>): Promise<GetStaticPropsResult<SensorDetailsPageProps>> {
  if (!params || !params.id) {
    return {
      props: null,
    }
  }

  const { id } = params
  // const response = await fetch(`${process.env.API_URL}/api/sensors/${id}`)
  // const result = await response.json()
  const result = await getDataWithDelay(id)

  return {
    props: result?.data || null,
  }
}

const SensorDetailsContainer = styled.div`
  background-color: aliceblue;
  padding: 16px;
  gap: 16px;
  max-width: 800px;
  margin: 0 auto;
`
