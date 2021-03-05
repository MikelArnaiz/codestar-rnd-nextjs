export const BIKE_TYPE_CARGO = 'cargo'
export const BIKE_TYPE_CITY = 'city'
export const BIKE_TYPE_SPORT = 'sport'

type BikeType = typeof BIKE_TYPE_CARGO | typeof BIKE_TYPE_CITY | typeof BIKE_TYPE_SPORT

export type BikeOverviewData = Readonly<{
  id: string
  type: BikeType
  batteryLevel: number
  isCharging: boolean
}>
