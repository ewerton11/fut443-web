'use client'

import { getAllPlayersByChampionshipData } from '@/app/api/championshipApi'
import { addPlayerToTeamData } from '@/app/api/teamApi'
import ButtonGroup from '@/app/components/buttons/buttonGroup'
import PlayerPosition from '@/app/components/footballField/playerPosition'
import Footer from '@/app/components/footer/footer'
import Header from '@/app/components/header/header'
import VerticalMenu from '@/app/components/menu/verticalMenu'
import PlayerCard from '@/app/components/players/PlayerCard'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function SelectTeam() {
  const play = [
    { id: 1, name: 'G. Cano', position: 'atacante', club: 'Flu...' },
    { id: 2, name: 'Thiago Silva', position: 'atacante', club: 'Flu...' },
  ]

  const [players, setPlayers] = useState<PlayersData[]>([])
  const selectedPlayers: string[] = []

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

  const handlePlayerClick = async (playerId: string) => {
    try {
      selectedPlayers.push(playerId)

      const teamTemporary = await addPlayerToTeamData(
        '002D4417-E422-4717-B7F2-64FF0AF55605',
        selectedPlayers
      )

      console.log(teamTemporary)
    } catch (error) {
      console.error('Erro ao adicionar jogador:')
    }
  }

  /*
  const handleCreateTeam = () => {
    Envie selectedPlayers para o backend para criar o time
    console.log(selectedPlayers)
  }
  */

  return (
    <div className="h-full flex flex-col relative">
      <Header />
      <div className="min-h-screen flex">
        <VerticalMenu />
        <main className="w-4/5 h-full flex flex-col">
          <div className="w-full h-1/5 flex justify-around items-center">
            <div className="w-1/3 flex justify-center items-center">
              <p className="text-sm text-gray-600 mr-2">Campeonato</p>
              <button className="bg-primary-blue p-2 rounded-md">
                <p className="text-sm">Libertadores</p>
              </button>
            </div>

            <div className="w-1/3 flex justify-center items-center">
              <div className="w-10 h-10 bg-gray-300 flex justify-center items-center mr-2">
                <p className="text-base font-bold">05</p>
              </div>
              <div className="w-10 h-10 bg-gray-300 flex justify-center items-center ">
                <p className="text-base font-bold">35</p>
              </div>
              <div className="w-10 h-10 bg-gray-300 flex justify-center items-center ml-2">
                <p className="text-base font-bold">01</p>
              </div>
            </div>

            <div className="w-1/3 flex justify-center items-center">
              <h1 className="text-base">ESCALE SEU TIME</h1>
            </div>
          </div>
          <div className="h-4/5 flex">
            <div className="w-2/5 bg-white">
              <ButtonGroup />
              <div className="overflow-y-auto max-h-full">
                {players.map((player) => (
                  <PlayerCard
                    key={player.id}
                    player={player}
                    onClick={handlePlayerClick}
                  />
                ))}
              </div>
            </div>
            <div className="w-3/5 flex justify-center">
              <div className="w-auto relative">
                <Image
                  src="/football-field.jpg"
                  alt="football field"
                  width={430}
                  height={608}
                  className="w-full h-full"
                />

                <PlayerPosition x={'left-10'} y={'top-24'} name={'Keno'} />
                <PlayerPosition
                  x={'left-1/2 transform -translate-x-1/2'}
                  y={'top-16'}
                  name={'G. Cano'}
                />
                <PlayerPosition x={'right-10'} y={'top-24'} name={'J. Arias'} />
                <PlayerPosition
                  x={'left-1/4'}
                  y={'top-1/2 transform -translate-y-1/2'}
                  name={'Martinelli'}
                />
                <PlayerPosition
                  x={'left-1/2 transform -translate-x-1/2'}
                  y={'top-1/3'}
                  name={'Ganso'}
                />
                <PlayerPosition
                  x={'right-1/4'}
                  y={'top-1/2 transform -translate-y-1/2'}
                  name={'André'}
                />
                <PlayerPosition x={'left-7'} y={'bottom-32'} name={'Marcelo'} />
                <PlayerPosition
                  x={'left-1/3'}
                  y={'bottom-28'}
                  name={'F. Melo'}
                />
                <PlayerPosition
                  x={'right-1/3'}
                  y={'bottom-28'}
                  name={'Manoel'}
                />
                <PlayerPosition
                  x={'right-7'}
                  y={'bottom-32'}
                  name={'S. Xavier'}
                />
                <PlayerPosition
                  x={'left-1/2 transform -translate-x-1/2'}
                  y={'bottom-7'}
                  name={'Fabio'}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
