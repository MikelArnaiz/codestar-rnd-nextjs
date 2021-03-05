import Link from 'next/link'

export default function MainPage() {
  return (
    <div>
      <Link href="/bikes">Bikes (client side fetching)</Link>
      <br />
      <Link href="/bikes2">Bikes2 (with server side props)</Link>
    </div>
  )
}
