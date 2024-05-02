'use client'

import { getAllPlayersByChampionshipData } from '@/app/api/championshipApi'
import { addPlayerToTeamData } from '@/app/api/teamApi'
import ButtonGroup from '@/app/components/buttons/buttonGroup'
import FootballField from '@/app/components/footballField/footballField'
import Footer from '@/app/components/footer/footer'
import Header from '@/app/components/header/header'
import VerticalMenu from '@/app/components/menu/verticalMenu'
import PlayerCard from '@/app/components/players/PlayerCard'
import DownArrow from '@/public/down-arrow'
import { useEffect, useState } from 'react'

export default function SelectTeam() {
  const [players, setPlayers] = useState<PlayersData[]>([])
  const [teamTemporary, setTeamTemporary] = useState<PlayersData[]>([])
  const [selectedPlayers, setSelectedPlayers] = useState<string[]>([])

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
      // Não deve ter id iguais
      if (!selectedPlayers.includes(playerId)) {
        setSelectedPlayers((prevSelectedPlayers) => [
          ...prevSelectedPlayers,
          playerId,
        ])

        const teamTemporaryData = await addPlayerToTeamData(
          '002D4417-E422-4717-B7F2-64FF0AF55605',
          [...selectedPlayers, playerId]
        )

        const newSelectedPlayers = teamTemporaryData.map((player) => player.id)
        setSelectedPlayers(newSelectedPlayers)
        setTeamTemporary(teamTemporaryData)
      } else {
        console.log('Errorrrrr no eusi')
      }
    } catch (error) {
      console.error('Erro ao adicionar jogador:')

      const updatedSelectedPlayers = selectedPlayers.filter(
        (player) => player !== playerId
      )
      setSelectedPlayers(updatedSelectedPlayers)
    }
  }

  const attackers = teamTemporary.filter(
    (player) => player.position === 'Attacker'
  )
  const midfielders = teamTemporary.filter(
    (player) => player.position === 'Midfielder'
  )
  const defenders = teamTemporary.filter(
    (player) => player.position === 'Defender'
  )
  const goalkeeper = teamTemporary.filter(
    (player) => player.position === 'Goalkeeper'
  )

  return (
    <div className="h-full flex flex-col relative">
      <Header />
      <div className="min-h-screen flex">
        <VerticalMenu />
        <main className="w-4/5 h-full flex flex-col">
          <div className="w-full h-1/5 flex justify-around items-center">
            <div className="w-1/3 flex justify-center items-center">
              <p className="text-sm text-gray-600 mr-2">Campeonato</p>
              <button className="flex bg-primary-blue p-1 rounded-md">
                <p className="text-white text-sm">Libertadores</p>
                <DownArrow />
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
            <div className="w-2/5 bg-white flex flex-col">
              <ButtonGroup />
              <div
                className="flex-1 flex flex-col overflow-y-auto"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {players.map((player) => (
                  <PlayerCard
                    key={player.id}
                    player={player}
                    attackers={attackers}
                    midfielders={midfielders}
                    defenders={defenders}
                    goalkeeper={goalkeeper}
                    teamTemporary={teamTemporary}
                    onClick={handlePlayerClick}
                  />
                ))}
              </div>
            </div>
            <FootballField
              attackers={attackers}
              midfielders={midfielders}
              defenders={defenders}
              goalkeeper={goalkeeper}
            />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
