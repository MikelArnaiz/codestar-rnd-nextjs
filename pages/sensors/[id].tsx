// import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next'
import { useRouter } from 'next/router'
// import { sensorsList } from '../../data/sensorsList'
import styled from '@emotion/styled'

type SensorDetailsPageProps = Readonly<{
  details: Record<string, unknown> | null
}>

export default function SensorDetailsPage(props: SensorDetailsPageProps) {
  const router = useRouter()
  const { id } = router.query

  return (
    <SensorDetailsContainer>
      <h2>Sensor {id}</h2>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </SensorDetailsContainer>
  )
}

// type StaticPath = Readonly<{
//   id: string
// }>

// export async function getStaticPaths(): Promise<GetStaticPathsResult<StaticPath>> {
//   const paths = sensorsList.map((sensor) => ({
//     params: {
//       id: sensor.id.toString(), // must match filename param, e.g. [id].tsx
//     },
//   }))

//   return {
//     paths,
//     fallback: false,
//   }
// }

// export async function getStaticProps({
//   params,
// }: GetStaticPropsContext<StaticPath>): Promise<GetStaticPropsResult<SensorDetailsPageProps>> {
//   if (params === undefined) {
//     return {
//       props: {
//         details: null,
//       },
//     }
//   }

//   const sensorDetailsResponse = await fetch(`${process.env.API_URL}/api/sensors/${params.id}`)
//   const json = await sensorDetailsResponse.json()

//   return {
//     props: {
//       details: json,
//     },
//   }
// }

const SensorDetailsContainer = styled.div`
  background-color: aliceblue;
  padding: 16px;
  gap: 16px;
  max-width: 800px;
  margin: 0 auto;
`
