import { GetStaticPropsResult } from 'next'
import { SensorData } from '../../domain/Sensor'
import { Sensor, createSensorData } from '../../components/Sensor/Sensor'
import styled from '@emotion/styled'

type SensorPageProps = Readonly<{
  sensors: SensorData[]
}>

const sensors = Array(100)
  .fill(null)
  .map((_, index): SensorData => createSensorData(index))

export default function SensorsPage(props: SensorPageProps) {
  const { sensors } = props

  return (
    <SensorsContainer>
      {sensors.map((sensor) => (
        <Sensor {...sensor} />
      ))}
    </SensorsContainer>
  )
}

export function getStaticProps(): GetStaticPropsResult<SensorPageProps> {
  return {
    props: {
      sensors,
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
