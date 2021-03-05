import { GetStaticPropsResult } from 'next'
import { BikeData } from '../../domain/Bike'
import { bikesStaticDataList } from '../../data/bikesList'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { BikesPageContainer } from '../../components/Bike/BikesPage'
import { useState, useEffect } from 'react'
import { BikeOverview } from '../../components/Bike/BikeOverview'
import { bikesEndpoint } from '../../constants/endpoints'

type BikesPageProps = Readonly<{
  data: BikeData[]
}>

export default function BikesPage(props: BikesPageProps) {
  const [bikes, setBikesDataList] = useState<BikeData[]>(props.data)
  const router = useRouter()

  useEffect(() => {
    async function getData() {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${bikesEndpoint}`)
      const json = await response.json()

      setBikesDataList(json)
    }

    getData()
  }, [setBikesDataList])

  const onClick = (id: string) => () => {
    router.push(`/bikes/${id}`)
  }

  return (
    <BikesPageContainer>
      <h3>StaticPaths + StaticProps</h3>
      <ListContainer>
        {bikes.map((bike) => (
          <BikeOverview data={bike} onClick={onClick(bike.id)} key={bike.id} />
        ))}
      </ListContainer>
    </BikesPageContainer>
  )
}

export function getStaticProps(): GetStaticPropsResult<BikesPageProps> {
  return {
    props: {
      data: bikesStaticDataList,
    },
  }
}

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
  gap: 16px;
`
