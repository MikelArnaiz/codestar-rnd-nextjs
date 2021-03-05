import { GetStaticPropsResult } from 'next'
import { BikeOverviewData } from '../../domain/Bike'
import { bikesList } from '../../data/bikesList'
import { BikeOverview } from '../../components/Bike/Bike'
import Link from 'next/link'

type BikesPageProps = Readonly<{
  bikesList: BikeOverviewData[]
}>

export default function BikesPage(props: BikesPageProps) {
  return (
    <div>
      <h3>Bikes</h3>
      {props.bikesList.map((bike) => (
        <>
          <Link href={`/bikes/${bike.id}`}>{bike.id}</Link>
          <BikeOverview bike={bike} />
          <hr />
        </>
      ))}
    </div>
  )
}

export function getStaticProps(): GetStaticPropsResult<BikesPageProps> {
  return {
    props: {
      bikesList: bikesList,
    },
  }
}
