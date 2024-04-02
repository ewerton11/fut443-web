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
                <div className="w-11/12 flex py-2">
                  <div className="w-1/3 flex justify-start pl-4">
                    <h2 className="text-sm sm:text-base">Disputa</h2>
                  </div>
                  <div className="w-1/3 flex justify-center">
                    <h2 className="text-sm sm:text-base">Começa em</h2>
                  </div>
                  <div className="w-1/3 flex justify-end pr-4">
                    <h2 className="text-sm sm:text-base">Premios e preços</h2>
                  </div>
                </div>
              </div>

              <div className="w-full h-auto flex flex-col items-center">
                <div className="bg-white flex w-11/12 h-32 border-b border-gray-200">
                  <div className="w-2/5 h-full">
                    <div className="h-full flex flex-col justify-center pl-4">
                      <div className="w-full h-1/3 flex items-end">
                        <div className="w-auto px-2 bg-red-500 rounded-lg">
                          <p className="text-xs md:text-sm text-white text-center">
                            Destaque
                          </p>
                        </div>
                      </div>
                      <div className="w-full h-1/3 flex items-center">
                        <h2 className="text-sm sm:text-base font-bold">
                          Br... | Rodada 02
                        </h2>
                      </div>
                      <div className="w-full h-1/3 flex items-center">
                        <h3 className="text-sm sm:text-base text-gray-500">
                          Brasileirao
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="w-1/5">
                    <div className="w-full h-full flex flex-col justify-center items-center">
                      <div className="mb-1">
                        <h1 className="text-xs sm:text-sm text-gray-500">
                          21/03, 20:00
                        </h1>
                      </div>
                      <div className="w-4/5 mt-1 flex justify-center">
                        <button className="p-1 rounded-md border border-gray-300 shadow-md">
                          <p className="text-xs sm:text-sm text-red-500">
                            Detalhes
                          </p>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="w-2/5">
                    <div className="w-full h-full">
                      <div className="h-full flex flex-col items-end pr-4">
                        <div className="w-auto h-1/3 flex items-center">
                          <p className="text-base text-red-500 font-bold">
                            R$ 300,00
                          </p>
                        </div>
                        <div className="w-auto h-1/3 flex items-center">
                          <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 p-2 rounded-md shadow-md hover:shadow-lg">
                            <p className="text-white text-xs sm:text-sm">
                              Participar de graça
                            </p>
                          </button>
                        </div>
                        <div className="h-1/3 flex justify-center items-center">
                          <p className="text-gray-500 text-center text-xs sm:text-sm">
                            301 times montados
                          </p>
                        </div>
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
