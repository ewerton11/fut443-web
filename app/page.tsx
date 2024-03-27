'use client'

import Header from './components/header/header'
import VerticalMenu from './components/menu/verticalMenu'

export default function Home() {
  return (
    <div className="relative h-screen overflow-y-auto">
      <Header />
      <div className="pt-12 h-full flex flex-1 overflow-y-auto">
        <VerticalMenu />
        <main className="flex flex-col flex-1 bg-black p-4 overflow-y-auto">
          <div className="h-32 w-full bg-yellow-300">
            <h1>Premios gratis</h1>
          </div>
          <div className="h-auto bg-white w-full mt-12">
            <div className="w-full">
              <h1 className="text-black">Ultimas apostas</h1>
            </div>
            <div className="bg-blue-800 h-24 flex">
              <div className="w-1/2">aposta</div>
              <div className="w-1/2">valores</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
