import { BikeData } from '../../domain/Bike'
import styled from '@emotion/styled'

type BikeOverviewProps = Readonly<{
  data: BikeData
  onClick: () => void
}>

export function BikeOverview(props: BikeOverviewProps) {
  return (
    <BikeContainer onClick={props.onClick}>
      <div>
        <strong>Type</strong>: {props.data.type} bike
      </div>

      {props.data.batteryLevel === undefined || props.data.isCharging === undefined ? (
        <span>Loading</span>
      ) : (
        <>
          <div>
            <strong>Battery level</strong>: {props.data.batteryLevel}%
          </div>

          <div>
            <strong>Charging</strong>: {props.data.isCharging ? 'yes' : 'no'}
          </div>
        </>
      )}
    </BikeContainer>
  )
}

export const BikeContainer = styled.div`
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
