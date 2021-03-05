import { BikeOverviewData } from '../../domain/Bike'

type BikeOverviewProps = Readonly<{
  bike: BikeOverviewData
}>

export function BikeOverview({ bike }: BikeOverviewProps) {
  return (
    <div>
      <div>
        <strong>Type</strong>: {bike.type} bike
      </div>
      <div>
        <strong>Battery level</strong>: {bike.batteryLevel}%
      </div>
      <div>
        <strong>Charging</strong>: {bike.isCharging ? 'yes' : 'no'}
      </div>
    </div>
  )
}
