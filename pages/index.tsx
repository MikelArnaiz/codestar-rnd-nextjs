import Link from 'next/link'

export default function MainPage() {
  return (
    <div>
      <Link href="/bikes">Bikes (client side fetch + StaticPaths + StaticProps)</Link>
      <br />
      <Link href="/bikes2">Bikes2 (server side props)</Link>
      <br />
      <Link href="/bikes3">Bikes3 (StaticPaths + StaticProps)</Link>
      <br />
      <Link href="/bikes3">Bikes4 (static)</Link>
    </div>
  )
}
