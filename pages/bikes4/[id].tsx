import { bikesDataList } from '../../data/bikesList'
import { Bike } from '../../components/Bike/Bike'
import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next'

type Bike4PageProps = Readonly<{
  id: string | null
}>

export default function Bike4Page(props: Bike4PageProps) {
  const bike = bikesDataList.find((b) => b.id === props.id)

  return (
    <>
      <h3>StaticPaths + StaticProp (just id)</h3>
      <Bike bike={bike ?? null} />
    </>
  )
}

type StaticPathProps = {
  id: string
}

export function getStaticPaths(): GetStaticPathsResult<StaticPathProps> {
  const paths = bikesDataList.map((bike) => ({
    params: {
      id: bike.id,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export function getStaticProps({
  params,
}: GetStaticPropsContext<StaticPathProps>): GetStaticPropsResult<Bike4PageProps> {
  return {
    props: {
      id: params?.id ?? null,
    },
  }
}
