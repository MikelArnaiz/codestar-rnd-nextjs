import { SensorData } from '../domain/Sensor'

export function createSensorData(index: number): SensorData {
  const id = index + 1
  return {
    id,
    name: `Sensor ${id}`,
    value: (Math.random() * 100).toFixed(2),
  }
}
