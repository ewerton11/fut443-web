'use client'

import {
  getAllChampionshipInProgress,
  getAllPlayersByChampionshipData,
} from '@/app/api/championshipApi'
import { addPlayerToTeamData } from '@/app/api/teamApi'
import ButtonGroup from '@/app/components/buttons/buttonGroup'
import FootballField from '@/app/components/footballField/footballField'
import Footer from '@/app/components/footer/footer'
import Header from '@/app/components/header/header'
import PlayerCard from '@/app/components/players/PlayerCard'
import DownArrow from '@/public/down-arrow'
import { useEffect, useState } from 'react'

export default function SelectTeam() {
  const [players, setPlayers] = useState<PlayersData[]>([])
  const [championshipInProgress, setChampionshipInProgress] = useState<
    ChampionshipInProgessData[]
  >([])
  const [idChampionship, setIdChampionship] = useState<string>()
  const [positionOrder, setPositionOrder] = useState<null | string>(null)
  const [showListChampionship, setShowListChampionship] =
    useState<boolean>(false)
  const [isArrowRotated, setIsArrowRotated] = useState(false)
  const [teamTemporary, setTeamTemporary] = useState<PlayersData[]>([])
  const [selectedPlayers, setSelectedPlayers] = useState<string[]>([])

  /*
  useEffect(() => {
    const fetchData = async () => {
      try {
        const championshipData = await getAllChampionshipInProgress()
        setChampionshipInProgress(championshipData)

        
        const params = idChampionship ?? championshipInProgress?.[0]?.id
        const allPlayersByChampionship = await getAllPlayersByChampionshipData(
          `${params}?position=${positionOrder}`
        )
        setPlayers(allPlayersByChampionship)
      } catch (error) {
        console.error('deu erro aqui hein crllll', error)
      }
    }

    fetchData()
  }, [championshipInProgress, idChampionship, positionOrder])
*/

  useEffect(() => {
    const fetchData = async () => {
      try {
        const championshipData = await getAllChampionshipInProgress()
        setChampionshipInProgress(championshipData)
        console.log('Data', championshipData)
      } catch (error) {}
    }

    fetchData()
  }, [])

  {
    /*
  const handleListChampionship = () => {
    setShowListChampionship(!showListChampionship)
    setIsArrowRotated(!isArrowRotated)
  }

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
*/
  }

  return (
    <div className="h-full flex flex-col relative">
      {/*
      <Header />
      <main className="w-full flex-1 flex flex-col">
        <div className="w-full h-28 flex justify-around items-center">
          <div className="relative w-1/3 flex justify-center items-center">
            <p className="sm:text-sm md:text-base text-gray-600 mr-2">
              Campeonato
            </p>
            <button
              className="flex items-center bg-primary-blue p-1 rounded-md"
              onClick={handleListChampionship}
            >
              <p className="sm:text-sm md:text-base text-white pl-2">
                {championshipInProgress?.[0]?.name}
              </p>
              <div
                className={`transform transition-transform duration-75 ${
                  showListChampionship ? 'rotate-180' : 'rotate-0'
                }`}
              >
                <DownArrow />
              </div>
            </button>
            {showListChampionship && (
              <div className="absolute top-full z-10 mt-1 w-40 bg-blue-200 rounded-md shadow-lg">
                <ul className="py-1 sm:text-sm md:text-base text-left">
                  {championshipInProgress.map((championship) => (
                    <li
                      key={championship.id}
                      className="border-b border-gray-200"
                    >
                      <button
                        className="block w-full px-4 py-2 hover:bg-gray-200"
                        onClick={(id) => {
                          setIdChampionship(championship.id)
                          setShowListChampionship(false)
                        }}
                      >
                        {championship.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="w-1/3 flex justify-center items-center font-bold sm:text-base md:text-lg">
            <div className="sm:w-8 md:w-10 sm:h-8 md:h-10 bg-gray-300 flex justify-center items-center mr-2">
              <p>05</p>
            </div>
            <div className="sm:w-8 md:w-10 sm:h-8 md:h-10 bg-gray-300 flex justify-center items-center ">
              <p>35</p>
            </div>
            <div className="sm:w-8 md:w-10 sm:h-8 md:h-10 bg-gray-300 flex justify-center items-center ml-2">
              <p>01</p>
            </div>
          </div>

          <div className="w-1/3 flex justify-center items-center">
            <h1 className="sm:text-base md:text-xl">SUA ESCALAÇÃO</h1>
          </div>
        </div>

        <div className="min-h-screen md:flex md:flex-row-reverse">
          <div className="w-full md:w-1/2 max-md:mb-4 flex items-center">
            <FootballField
              attackers={attackers}
              midfielders={midfielders}
              defenders={defenders}
              goalkeeper={goalkeeper}
            />
          </div>
          <div className="w-full md:w-1/2 md:flex justify-center max-md:mb-4">
            <div
              className="w-full md:w-4/5 flex flex-col"
              style={{ height: '90vh' }}
            >
              <ButtonGroup
                onPositionSelect={(order: string | null) =>
                  setPositionOrder(order)
                }
              />
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
          </div>
        </div>
      </main>
      <Footer />
              */}
    </div>
  )
}
