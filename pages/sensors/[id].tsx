import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next'
import { sensorsList } from '../../data/sensorsList'
import styled from '@emotion/styled'
import { SensorJSON } from '../api/sensors/[id]'
import { useRouter } from 'next/router'

type SensorDetailsPageProps = Readonly<{
  paths: GetStaticPathsResult<StaticPath>['paths']
  data: Record<string, unknown> | null
  error: string | null
}>

export default function SensorDetailsPage(props: SensorDetailsPageProps) {
  const router = useRouter()

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return (
      <div>
        Loading...
        <br />
        If the page is not yet generated, this will be displayed initially until getStaticProps() finishes running
      </div>
    )
  }

  if (props === null) {
    return <p>no props!</p>
  }

  if (!!props.error) {
    return <p>Error: {props.error}</p>
  }

  return (
    <SensorDetailsContainer>
      <h2>Sensor {props.data?.id}</h2>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </SensorDetailsContainer>
  )
}

type StaticPath = Readonly<{
  id: string
}>

const paths: GetStaticPathsResult<StaticPath>['paths'] = sensorsList.map((sensor) => ({
  params: {
    id: sensor.id.toString(), // must match filename param, e.g. [id].tsx
  },
}))

export function getStaticPaths(): GetStaticPathsResult<StaticPath> {
  return {
    paths,
    fallback: false,
  }
}

async function getDataFromAPI(id: string) {
  try {
    const response = await fetch(`${process.env.API_URL}/api/sensors/${id}`)
    const result = (await response.json()) as SensorJSON

    if (!result?.data) {
      throw new Error('no data')
    }

    return {
      error: null,
      data: result.data,
    }
  } catch (err) {
    return Promise.resolve({
      error: err.message,
      data: null,
    })
  }
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<StaticPath>): Promise<GetStaticPropsResult<SensorDetailsPageProps>> {
  if (!params || !params.id) {
    return {
      props: {
        paths,
        data: null,
        error: 'no param id',
      },
    }
  }

  const { data, error } = await getDataFromAPI(params.id)

  return {
    props: {
      paths,
      data,
      error,
    },
  }
}

const SensorDetailsContainer = styled.div`
  background-color: aliceblue;
  padding: 16px;
  gap: 16px;
  max-width: 800px;
  margin: 0 auto;
`
