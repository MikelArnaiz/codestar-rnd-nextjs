import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'
import random from 'lodash/random'

const handler = nc<NextApiRequest, NextApiResponse>().get((req, res) => {
  const { id } = req.query
  const lat = random(-90, 90, true).toFixed(4)
  const lon = random(-180, 180, true).toFixed(4)

  try {
    // const weatherDataResponse = await fetch(`https://www.metaweather.com/api/location/search/?lattlong=${lat},${lon}`)
    // const json = await weatherDataResponse.json()

    res.json({
      data: {
        id,
        location: {
          lat,
          lon,
        },
      },
      // weather: json,
    })
  } catch (err) {
    console.log(err)

    res.json({
      data: null,
    })

    // res.json({
    //   id,
    //   location: {
    //     lat,
    //     lon,
    //   },
    //   weather: null,
    // })
  }
})

export default handler
