import Header from '@/app/components/header/header'
import Link from 'next/link'

export default function Homeee() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <Link href={'/'}>inicio</Link>
      </main>
    </div>
  )
}
