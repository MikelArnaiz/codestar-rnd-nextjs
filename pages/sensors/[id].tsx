import { useRouter } from 'next/router'

export default function SensorDetailsPage() {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      <h2>Sensor {id}</h2>
    </div>
  )
}
