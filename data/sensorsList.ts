import { SensorData } from '../domain/Sensor'
import { createSensorData } from './createSensorData'

export const sensorsList = Array(100)
  .fill(null)
  .map((_, index): SensorData => createSensorData(index))
