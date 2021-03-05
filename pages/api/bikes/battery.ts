import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'
import { BikeBatteryData } from '../../../domain/Bike'
import { createBikeBatteryData } from '../../../data/createBikeBatteryData'

const handler = nc<NextApiRequest, NextApiResponse<BikeBatteryData>>().get(async (_req, res) => {
  const batteryData = createBikeBatteryData()
  return res.json(batteryData)
})

export default handler
