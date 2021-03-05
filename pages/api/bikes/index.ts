import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'
import { BikeData } from '../../../domain/Bike'
import { createBikesDataList } from '../../../data/createBikesDataList'

const handler = nc<NextApiRequest, NextApiResponse<BikeData[]>>().get(async (_req, res) => {
  res.json(createBikesDataList())
})

export default handler
