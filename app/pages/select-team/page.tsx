'use client'

import ButtonGroup from '@/app/components/buttons/buttonGroup'
import Header from '@/app/components/header/header'
import PlayerCard from '@/app/components/players/PlayerCard'

export default function SelectTeam() {
  const buttons = [
    { label: 'Todos' },
    { label: 'ATA' },
    { label: 'MEI' },
    { label: 'ZAG' },
    { label: 'GOL' },
  ]

  const players = [
    { id: 1, name: 'G. Cano', team: 'Flu...' },
    { id: 2, name: 'Thiago Silva', team: 'PSG' },
    { id: 3, name: 'Messi', team: 'PSG' },
    { id: 4, name: 'Neymar', team: 'PSG' },
    { id: 5, name: 'Ronaldo', team: 'Manchester United' },
  ]

  return (
    <div className="relative max-w-screen h-screen flex flex-col">
      <Header />
      <main className="w-full h-full flex flex-col">
        <div className="bg-white w-full h-28 flex justify-around items-center">
          <div className="w-1/3 flex justify-center items-center">
            <h1 className="text-lg">ESCALE SEU TIME</h1>
          </div>
          <div className="w-1/3 flex justify-center items-center">
            <p className="text-gray-600 mr-2">Campeonato</p>
            <button className="bg-primary-blue p-2 rounded-md">
              <p>Libertadores</p>
            </button>
          </div>
          <div className="w-1/3 flex justify-center items-center">
            <div className="w-11 h-11 bg-gray-300 flex justify-center items-center mr-2">
              <p className="text-lg font-bold">05</p>
            </div>
            <div className="w-11 h-11 bg-gray-300 flex justify-center items-center ">
              <p className="text-lg font-bold">35</p>
            </div>
            <div className="w-11 h-11 bg-gray-300 flex justify-center items-center ml-2">
              <p className="text-lg font-bold">01</p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex">
          <div className="w-3/5"></div>
          <div className="w-2/5 bg-blue-100">
            <ButtonGroup buttons={buttons} />
            {players.map((player) => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
