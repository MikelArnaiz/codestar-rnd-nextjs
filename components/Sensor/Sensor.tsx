import styled from '@emotion/styled'
import Link from 'next/link'
import { SensorData } from '../../domain/Sensor'

export type SensorProps = SensorData

export const Sensor = (props: SensorProps) => {
  return (
    <SensorContainer>
      <SensorTitle href={`/sensors/${props.id}`}>
        <a>{props.name}</a>
      </SensorTitle>
      <SensorValue>{props.value}</SensorValue>
    </SensorContainer>
  )
}

export function createSensorData(index: number): SensorData {
  const id = index + 1
  return {
    id,
    name: `Sensor ${id}`,
    value: (Math.random() * 100).toFixed(2),
  }
}

const SensorContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 8px;
  background-color: lightblue;
  border-radius: 8px;
`

const SensorTitle = styled(Link)`
  font-size: 1.5em;
  display: inline-block;
`

const SensorValue = styled.div`
  color: grey;
`
