import { BikeData } from '../../domain/Bike'

type BikeProps = Readonly<{
  bike: BikeData | null
}>

export function Bike({ bike }: BikeProps) {
  if (bike === null) {
    return <div>No bike data</div>
  }

  return (
    <div>
      <h3>{bike.id}</h3>
      <div>
        <strong>Type</strong>: {bike.type} bike
      </div>

      {bike.batteryLevel !== undefined && bike.isCharging !== undefined ? (
        <>
          <div>
            <strong>Battery level</strong>: {bike.batteryLevel}%
          </div>
          <div>
            <strong>Charging</strong>: {bike.isCharging ? 'yes' : 'no'}
          </div>
        </>
      ) : (
        <span>Loading details</span>
      )}
    </div>
  )
}
