import { GetStaticPropsResult } from 'next'
import { SensorData } from '../domain/Sensor'
import { Sensor } from '../components/Sensor/Sensor'
import styled from '@emotion/styled'
import { sensorsList } from '../data/sensorsList'
import Link from 'next/link'

type SensorPageProps = Readonly<{
  sensors: SensorData[]
}>

export default function MainPage(props: SensorPageProps) {
  const { sensors } = props

  return (
    <MainPageContainer>
      <Link href="/bikes">
        <a>Bikes</a>
      </Link>
      <SensorsContainer>
        {sensors.map((sensor) => (
          <Sensor {...sensor} key={sensor.id} />
        ))}
      </SensorsContainer>
    </MainPageContainer>
  )
}

export function getStaticProps(): GetStaticPropsResult<SensorPageProps> {
  return {
    props: {
      sensors: sensorsList,
    },
  }
}

const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 800px;
  margin: 0 auto;
  justify-content: center;
`

const SensorsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
  gap: 16px;
`
