import { BikeOverviewData } from '../../domain/Bike'

type BikeOverviewProps = Readonly<{
  bike: BikeOverviewData
}>

export function BikeOverview({ bike }: BikeOverviewProps) {
  return (
    <ul>
      <li>
        <strong>Id</strong>: {bike.id}
      </li>
      <li>
        <strong>Type</strong>: {bike.type} bike
      </li>
      <li>
        <strong>Battery level</strong>: {bike.batteryLevel}%
      </li>
      <li>
        <strong>Charging</strong>: {bike.isCharging ? 'yes' : 'no'}
      </li>
    </ul>
  )
}
