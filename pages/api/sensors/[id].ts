import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'
import random from 'lodash/random'

const handler = nc<NextApiRequest, NextApiResponse>().get(async (req, res) => {
  try {
    const { id } = req.query
    const lat = random(-90, 90, true).toFixed(4)
    const lon = random(-180, 180, true).toFixed(4)
    const weatherDataResponse = await fetch(`https://www.metaweather.com/api/location/search/?lattlong=${lat},${lon}`)
    const json = await weatherDataResponse.json()

    res.json({
      data: {
        id,
        location: {
          lat,
          lon,
        },
        weather: json,
      },
    })
  } catch (err) {
    console.error(err)

    res.json({
      data: null,
    })
  }
})

export default handler
