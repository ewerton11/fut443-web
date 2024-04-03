'use client'

import Header from './components/header/header'
import MobileBottomBar from './components/menu/mobileBottomBar'
import VerticalMenu from './components/menu/verticalMenu'
import InfoCard from './components/card/InfoCard'
import Footer from './components/footer/footer'
import { useState } from 'react'
import OffersSlider from './components/sliders/offersSlider'
import Image from 'next/image'
import Offers from './components/offers/offers'

export default function Home() {
  const [showLobby, setShowLobby] = useState<boolean>(true)

  return (
    <div className="relative">
      <Header />
      <div className="w-full h-full grid grid-cols-1">
        <div className="flex">
          <VerticalMenu />
          <main className="grid grid-cols-1 flex-1 overflow-hidden">
            {/* <OffersSlider /> */}
            <Offers />
            <div className="flex flex-col w-full mt-6">
              <div className="w-full flex justify-center">
                <div className="w-11/12 flex py-2">
                  <div className="w-auto">
                    <button
                      onClick={() => setShowLobby(true)}
                      className={`w-auto ${
                        showLobby ? 'border-b-2 border-black' : 'text-gray-600'
                      }`}
                    >
                      <p className="text-sm md:text-base font-medium">Lobby</p>
                    </button>
                  </div>
                  <div className="w-auto pl-4">
                    <button
                      onClick={() => setShowLobby(false)}
                      className={`${
                        showLobby ? 'text-gray-600' : 'border-b-2 border-black'
                      }`}
                    >
                      <p className="text-sm md:text-base font-medium">
                        Como jogar
                      </p>
                    </button>
                  </div>
                </div>
              </div>
              {showLobby && (
                <div className="w-full flex justify-center">
                  <div className="w-11/12 bg-white flex flex-col rounded-lg shadow-lg p-6 my-4">
                    <div className="w-full flex">
                      <div className="w-1/3 flex justify-start">
                        <h2 className="text-sm sm:text-base">Disputa</h2>
                      </div>
                      <div className="w-1/3 flex justify-center">
                        <h2 className="text-sm sm:text-base">Começa em</h2>
                      </div>
                      <div className="w-1/3 flex justify-end">
                        <h2 className="text-sm sm:text-base">
                          Premios e preços
                        </h2>
                      </div>
                    </div>
                    <div className="w-full h-auto flex flex-col items-center">
                      <InfoCard
                        title="Brasileirão | Rodada 02"
                        category="Brasileirao"
                        date="21/03, 20:00"
                        price="R$ 300,00"
                        participants="301 times montados"
                      />
                      <InfoCard
                        title="Br... | Rodada 02"
                        category="Brasileirao"
                        date="21/03, 20:00"
                        price="R$ 300,00"
                        participants="301 times montados"
                      />
                      <InfoCard
                        title="Br... | Rodada 02"
                        category="Brasileirao"
                        date="21/03, 20:00"
                        price="R$ 300,00"
                        participants="301 times montados"
                      />
                      <InfoCard
                        title="Br... | Rodada 02"
                        category="Brasileirao"
                        date="21/03, 20:00"
                        price="R$ 300,00"
                        participants="301 times montados"
                      />
                      <InfoCard
                        title="Br... | Rodada 02"
                        category="Brasileirao"
                        date="21/03, 20:00"
                        price="R$ 300,00"
                        participants="301 times montados"
                      />
                    </div>
                  </div>
                </div>
              )}

              {!showLobby && (
                <div className="flex justify-center items-center">
                  <div className="w-11/12 bg-white rounded-lg shadow-lg p-6 my-4">
                    <h2 className="text-xl font-bold mb-4">Como Jogar</h2>
                    <p className="mb-4 text-gray-800">
                      Bem-vindo ao nosso jogo de futebol virtual! Aqui estão as
                      instruções básicas para começar:
                    </p>
                    <ol className="list-decimal ml-6 mb-6 text-gray-800">
                      <li>
                        Monte seu time escolhendo jogadores de diferentes
                        posições;
                      </li>
                      <li>Entre em torneios e desafie outros jogadores;</li>
                      <li>
                        Ganhe pontos com base no desempenho dos seus jogadores
                        na vida real;
                      </li>
                      <li>
                        Troque seus jogadores para maximizar sua pontuação;
                      </li>
                      <li>Concorra a prêmios exclusivos e suba no ranking!</li>
                    </ol>
                    <p className="font-bold text-gray-900">
                      Divirta-se jogando!
                    </p>
                  </div>
                </div>
              )}
            </div>
          </main>
        </div>
        <Footer />
        <MobileBottomBar />
      </div>
    </div>
  )
}
