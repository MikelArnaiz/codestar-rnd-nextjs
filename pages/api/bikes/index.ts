import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'
import { BikeData } from '../../../domain/Bike'
import { bikesStaticDataList } from '../../../data/bikesList'
import { createBikeBatteryData } from '../../../data/createBikeBatteryData'

const handler = nc<NextApiRequest, NextApiResponse<BikeData[]>>().get((_req, res) => {
  const list = bikesStaticDataList.map((bike) => ({
    ...bike,
    ...createBikeBatteryData(),
  }))

  return res.json(list)
})

export default handler
