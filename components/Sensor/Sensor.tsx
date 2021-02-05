import styled from '@emotion/styled'
import { SensorData } from '../../domain/Sensor'
import { useRouter } from 'next/router'

export type SensorProps = SensorData

export const Sensor = (props: SensorProps) => {
  const router = useRouter()

  const onClick = () => {
    router.push(`/sensors/${props.id}`)
  }

  return (
    <SensorContainer onClick={onClick}>
      <SensorTitle>{props.name}</SensorTitle>
      <SensorValue>{props.value}</SensorValue>
    </SensorContainer>
  )
}

type SensorContainerProps = Readonly<{
  onClick: () => void
}>

const SensorContainer = styled.div<SensorContainerProps>`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 8px;
  background-color: lightblue;
  border-radius: 8px;

  &:hover {
    cursor: pointer;
  }
`

const SensorTitle = styled.div`
  font-size: 1.5em;
  display: inline-block;
`

const SensorValue = styled.div`
  color: grey;
`
