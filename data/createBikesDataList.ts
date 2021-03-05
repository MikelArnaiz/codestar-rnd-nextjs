import { createBikeBatteryData } from './createBikeBatteryData'
import { bikesStaticDataList } from './bikesList'
import { BikeData } from '../domain/Bike'

export function createBikesDataList(): BikeData[] {
  return bikesStaticDataList.map((bike) => ({
    ...bike,
    ...createBikeBatteryData(),
  }))
}
