'use client'

import Link from 'next/link'
import Header from './components/header/header'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <Link href={'/'}>inicio</Link>
      </main>
    </div>
  )
}
