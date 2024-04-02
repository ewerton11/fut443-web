'use client'

import Image from 'next/image'
import Header from './components/header/header'
import MobileBottomBar from './components/menu/mobileBottomBar'
import VerticalMenu from './components/menu/verticalMenu'
import FreePrizes from './components/sliders/freePrizes'

export default function Home() {
  return (
    <div className="relative w-screen h-screen">
      <Header />
      <div className="pt-12 pb-12 sm:pb-0 h-full flex">
        <VerticalMenu />
        <main className="flex flex-col flex-1 overflow-y-auto">
          <div className="flex justify-center items-center w-full h-28 mt-2">
            <FreePrizes />
          </div>
          <div className="flex flex-col w-full mt-12">
            <div className="w-full flex justify-center border-b border-white">
              <div className="w-11/12 flex py-2">
                <div className="w-auto">
                  <h3 className="text-base font-bold">Lobby</h3>
                </div>
                <div className="w-auto pl-4">
                  <h3 className="text-base font-bold">Como jogar</h3>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="w-full flex justify-center">
                <div className="w-11/12 flex">
                  <div className="w-1/3 flex justify-center">
                    <h2 className="p-2">Disputa</h2>
                  </div>
                  <div className="w-1/3 flex justify-center">
                    <h2 className="p-2">Começa em</h2>
                  </div>
                  <div className="w-1/3 flex justify-center">
                    <h2 className="p-2">Premios e preços</h2>
                  </div>
                </div>
              </div>
              <div className="w-full h-auto flex flex-col items-center">
                <div className="bg-white flex w-11/12 h-32 border-b border-gray-200">
                  <div className="w-1/3 flex flex-col justify-center">
                    <div className="w-full h-1/3 flex items-center">
                      <div className="pl-4">
                        <div className="w-16 bg-red-500 rounded-lg">
                          <p className="text-xs text-white text-center p-1">
                            Destaque
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="pl-4">
                        <h2 className="text-base font-bold">
                          Brasileirão rodada 01
                        </h2>
                      </div>
                    </div>
                    <div className="w-full h-1/3 flex items-center">
                      <div className="pl-4">
                        <h3 className="text-sm text-gray-500">Brasileirao</h3>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/3">
                    <div className="w-full h-full flex flex-col justify-center items-center">
                      <div className="p-2">
                        <h1 className="text-base text-gray-500">
                          21/03, 20:00
                        </h1>
                      </div>
                      <div className="h-1/3">
                        <button className="p-2 rounded-md border border-gray-300 shadow-md">
                          <p className="text-sm text-red-500">Detalhes</p>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/3">
                    <div className="w-full h-full flex flex-col justify-center items-center">
                      <div className="h-1/3 flex justify-center items-center">
                        <p className="text-base text-red-500 font-bold">
                          R$ 300,00
                        </p>
                      </div>
                      <button className="min-w-20 w-auto bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 p-2 rounded-md shadow-md hover:shadow-lg">
                        <p className="text-white text-sm">
                          Participar de Graça
                        </p>
                      </button>
                      <div className="h-1/3 flex justify-center items-center">
                        <p className="text-gray-500 text-center text-sm">
                          301 times montados
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <MobileBottomBar />
    </div>
  )
}
