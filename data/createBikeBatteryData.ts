import { BikeBatteryData } from '../domain/Bike'

export function createBikeBatteryData(): BikeBatteryData {
  return {
    batteryLevel: Math.round(Math.random() * 100),
    isCharging: Math.random() < 0.5,
  }
}
