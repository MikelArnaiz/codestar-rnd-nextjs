import { GetStaticPropsResult } from 'next'
import { SensorData } from '../../domain/Sensor'
import { Sensor } from '../../components/Sensor/Sensor'
import styled from '@emotion/styled'
import { sensorsList } from '../../data/sensorsList'

type SensorPageProps = Readonly<{
  sensors: SensorData[]
}>

export default function SensorsPage(props: SensorPageProps) {
  const { sensors } = props

  return (
    <SensorsContainer>
      {sensors.map((sensor) => (
        <Sensor {...sensor} key={sensor.id} />
      ))}
    </SensorsContainer>
  )
}

export function getStaticProps(): GetStaticPropsResult<SensorPageProps> {
  return {
    props: {
      sensors: sensorsList,
    },
  }
}

const SensorsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
  gap: 16px;
  max-width: 800px;
  margin: 0 auto;
  justify-content: center;
`
