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
  const [championshipInProgress, setChampionshipInProgress] = useState<
    ChampionshipInProgessData[]
  >([])

  const [players, setPlayers] = useState<PlayersData[]>([])
  const [idChampionship, setIdChampionship] = useState<string>()
  const [positionOrder, setPositionOrder] = useState<null | string>(null)

  const [showChampionshipList, setShowChampionshipList] =
    useState<boolean>(false)
  const [isArrowRotated, setIsArrowRotated] = useState(false)
  const [teamTemporary, setTeamTemporary] = useState<PlayersData[]>([])
  const [selectedPlayers, setSelectedPlayers] = useState<string[]>([])

  useEffect(() => {
    const fetchChampionshipData = async () => {
      try {
        const championshipData = await getAllChampionshipInProgress()
        setChampionshipInProgress(championshipData)
      } catch (error) {
        console.error(
          'Ocorreu um erro ao buscar os dados do campeonato:',
          error
        )
      }
    }

    fetchChampionshipData()
  }, [])

  useEffect(() => {
    const fetchPlayersByChampionshipData = async () => {
      try {
        if (!idChampionship && championshipInProgress.length > 0) {
          setIdChampionship(championshipInProgress[0].id)
          return
        }

        if (idChampionship) {
          const allPlayersByChampionshipData =
            await getAllPlayersByChampionshipData(
              `${idChampionship}?position=${positionOrder}`
            )
          setPlayers(allPlayersByChampionshipData)
        }
      } catch (error) {
        console.error(
          'Ocorreu um erro ao buscar os dados dos jogadores:',
          error
        )
      }
    }

    fetchPlayersByChampionshipData()
  }, [championshipInProgress, idChampionship, positionOrder])

  const toggleChampionshipList = () => {
    setShowChampionshipList(!showChampionshipList)
    setIsArrowRotated(!isArrowRotated)
  }

  const handleAddPlayerToTeam = async (playerId: string) => {
    try {
      if (!selectedPlayers.includes(playerId)) {
        setSelectedPlayers((prevSelectedPlayers) => [
          ...prevSelectedPlayers,
          playerId,
        ])

        const teamTemporaryData = await addPlayerToTeamData(
          `${idChampionship}`,
          [...selectedPlayers, playerId]
        )

        const newSelectedPlayers = teamTemporaryData.map((player) => player.id)
        setSelectedPlayers(newSelectedPlayers)
        setTeamTemporary(teamTemporaryData)
      } else {
        console.error('Erro: O jogador já está selecionado.')
      }
    } catch (error) {
      console.error('Erro ao adicionar jogador:', error)

      const updatedSelectedPlayers = selectedPlayers.filter(
        (player) => player !== playerId
      )
      setSelectedPlayers(updatedSelectedPlayers)
    }
  }

  const handleRemovePlayerFromTeam = async (playerId: string) => {
    try {
      const updatedSelectedPlayers = selectedPlayers.filter(
        (player) => player !== playerId
      )

      const updatedTeamTemporary = teamTemporary.filter(
        (player) => player.id !== playerId
      )

      setSelectedPlayers(updatedSelectedPlayers)
      setTeamTemporary(updatedTeamTemporary)
    } catch (error) {
      console.error('Erro ao remover jogador:', error)
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
      <main className="w-full flex-1 flex flex-col">
        <div className="w-full h-28 flex justify-between lg:justify-around items-center">
          <div className="relative w-auto sm:w-1/3 flex justify-center items-center">
            <p className="text-sm md:text-base 2xl:text-lg text-gray-600 mx-2 sm:mr-2">
              Campeonato
            </p>
            <button
              className="flex items-center bg-primary-blue p-1 rounded-md"
              onClick={toggleChampionshipList}
            >
              <p className="text-sm md:text-base 2xl:text-lg text-white pl-2">
                {championshipInProgress?.[0]?.name}
              </p>
              <div
                className={`transform transition-transform duration-75 ${
                  showChampionshipList ? 'rotate-180' : 'rotate-0'
                }`}
              >
                <DownArrow />
              </div>
            </button>
            {showChampionshipList && (
              <div className="absolute top-full z-10 mt-1 w-40 bg-blue-200 rounded-md shadow-lg">
                <ul className="py-1 text-sm md:text-base text-left">
                  {championshipInProgress.map((championship) => (
                    <li
                      key={championship.id}
                      className="border-b border-gray-200"
                    >
                      <button
                        className="2xl:text-lg block w-full px-4 py-2 hover:bg-gray-200"
                        onClick={(id) => {
                          setIdChampionship(championship.id)
                          setShowChampionshipList(false)
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

          <div className="w-1/3 flex justify-center items-center font-bold text-sm sm:text-base md:text-lg 2xl:text-xl">
            <div className="w-8 md:w-10 h-8 md:h-10 2xl:w-12 2xl:h-12 bg-gray-300 flex justify-center items-center mr-2">
              <p>05</p>
            </div>
            <div className="w-8 md:w-10 h-8 md:h-10 2xl:w-12 2xl:h-12 bg-gray-300 flex justify-center items-center ">
              <p>35</p>
            </div>
            <div className="w-8 md:w-10 h-8 md:h-10 2xl:w-12 2xl:h-12 bg-gray-300 flex justify-center items-center ml-2">
              <p>01</p>
            </div>
          </div>

          <div className="hidden w-1/3 lg:flex justify-center items-center">
            <h1 className="sm:text-base md:text-xl 2xl:text-2xl">
              SUA ESCALAÇÃO
            </h1>
          </div>
        </div>

        <div className="h-auto max-2xl:min-h-[90vh] 2xl:h-[75vh] lg:flex lg:flex-row-reverse justify-center">
          <div className="w-full lg:w-auto h-[60vh] sm:h-[80vh] xl:h-screen 2xl:h-[75vh] flex justify-center items-center 2xl:ml-10">
            <FootballField
              attackers={attackers}
              midfielders={midfielders}
              defenders={defenders}
              goalkeeper={goalkeeper}
              onPlayerRemove={handleRemovePlayerFromTeam}
            />
          </div>
          <div className="w-full lg:max-w-1/2 2xl:w-[30vw] lg:flex justify-center mb-4 2xl:mr-10">
            <div className="w-full xl:w-4/5 h-[80vh] xl:h-screen 2xl:w-full 2xl:h-full flex flex-col">
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
                    onPlayerAdd={handleAddPlayerToTeam}
                    onPlayerRemove={handleRemovePlayerFromTeam}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
