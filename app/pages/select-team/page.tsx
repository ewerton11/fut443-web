'use client'

import { getAllPlayersByChampionshipData } from '@/app/api/championshipApi'
import ButtonGroup from '@/app/components/buttons/buttonGroup'
import Header from '@/app/components/header/header'
import PlayerCard from '@/app/components/players/PlayerCard'
import { useEffect, useState } from 'react'

export default function SelectTeam() {
  const play = [
    { id: 1, name: 'G. Cano', position: 'atacante', club: 'Flu...' },
    { id: 2, name: 'Thiago Silva', position: 'atacante', club: 'Flu...' },
  ]

  const [players, setPlayers] = useState<PlayersData[]>([])
  const [selectedPlayers, setSelectedPlayers] = useState([])

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const allPlayersByChampionship = await getAllPlayersByChampionshipData(
          '002D4417-E422-4717-B7F2-64FF0AF55605'
        )
        setPlayers(allPlayersByChampionship)
      } catch (error) {
        console.error('Erro ao buscar jogadores:')
      }
    }

    fetchPlayers()
  }, [])

  const handlePlayerSelect = (playerId: string) => {
    const player = players.find((p) => p.id === playerId)
    setSelectedPlayers((prevPlayers) => [...prevPlayers, player])
    console.log(selectedPlayers)
  }

  const handleCreateTeam = () => {
    // Envie selectedPlayers para o backend para criar o time
    console.log(selectedPlayers)
  }

  return (
    <div className="relative max-w-screen h-screen flex flex-col">
      <Header />
      <main className="w-full h-full flex flex-col">
        <div className="bg-white w-full min-h-28 flex justify-around items-center">
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
            <ButtonGroup />
            <div className="overflow-y-auto max-h-full">
              {players.map((player) => (
                <PlayerCard
                  key={player.id}
                  player={player}
                  onSelect={handlePlayerSelect}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
