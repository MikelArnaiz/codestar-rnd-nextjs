export const BIKE_TYPE_CARGO = 'cargo'
export const BIKE_TYPE_CITY = 'city'
export const BIKE_TYPE_SPORT = 'sport'

type BikeType = typeof BIKE_TYPE_CARGO | typeof BIKE_TYPE_CITY | typeof BIKE_TYPE_SPORT

export type BikeStaticData = Readonly<{
  id: string
  type: BikeType
}>

export type BikeBatteryData = Readonly<{
  batteryLevel: number
  isCharging: boolean
}>

export type BikeData = BikeStaticData & Partial<BikeBatteryData>
