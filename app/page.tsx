'use client'

import Header from './components/header/header'
import VerticalMenu from './components/menu/verticalMenu'
import FreePrizes from './components/sliders/freePrizes'

export default function Home() {
  return (
    <div className="relative w-screen h-screen">
      <Header />
      <div className="pt-12 h-full flex">
        <VerticalMenu />
        <main className="flex flex-col flex-1 overflow-y-auto">
          <div className="flex justify-center items-center w-full h-28 mt-2">
            <FreePrizes />
          </div>
          <div className="h-auto bg-white w-full mt-12">
            <div className="w-full">
              <h1 className="text-black">Ultimas apostas</h1>
            </div>
            <div className="bg-blue-800 h-24 flex">
              <div className="w-1/2">apostas</div>
              <div className="w-1/2">valores</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
