'use client'

import Link from 'next/link'
import Header from './components/header/header'
import { useState } from 'react'

export default function Home() {
  const [showNavigation, setShowNavigation] = useState(true)

  return (
    <div className="flex flex-col min-h-screen">
      <Header showNavigation={showNavigation} />

      <main className="flex-grow">
        <Link href={'/'}>inicio</Link>
      </main>
    </div>
  )
}
