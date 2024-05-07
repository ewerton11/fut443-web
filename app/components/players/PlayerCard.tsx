import React from 'react'
import AddIcon from '@/public/add'
import Image from 'next/image'
import RemoveIcon from '@/public/remove'

interface PlayerCardProps {
  player: PlayersData
  attackers: PlayersData[]
  midfielders: PlayersData[]
  defenders: PlayersData[]
  goalkeeper: PlayersData[]
  teamTemporary: PlayersData[]
  onPlayerAdd: (playerId: string) => void
  onPlayerRemove: (playerId: string) => void
}

const PlayerCard = ({
  player,
  attackers,
  midfielders,
  defenders,
  goalkeeper,
  teamTemporary,
  onPlayerAdd,
  onPlayerRemove,
}: PlayerCardProps) => {
  const blockedByRepetitions = teamTemporary.some(
    (selectedPlayer) => selectedPlayer.id === player.id
  )

  const blockedByLimit =
    (player.position === 'Attacker' && attackers.length >= 3) ||
    (player.position === 'Midfielder' && midfielders.length >= 3) ||
    (player.position === 'Defender' && defenders.length >= 4) ||
    (player.position === 'Goalkeeper' && goalkeeper.length >= 1)

  return (
    <div
      className={`w-full min-h-24 flex border-b border-gray-300 ${
        blockedByRepetitions || blockedByLimit ? '' : 'cursor-pointer'
      }`}
      onClick={
        blockedByRepetitions || blockedByLimit
          ? undefined
          : () => onPlayerAdd(player.id)
      }
    >
      <div
        className={`ml-5 flex justify-center items-center ${
          blockedByRepetitions ? 'cursor-pointer' : ''
        }`}
        onClick={
          blockedByRepetitions ? () => onPlayerRemove(player.id) : undefined
        }
      >
        {blockedByRepetitions ? (
          <RemoveIcon width={35} height={35} color="#e78878" />
        ) : blockedByLimit ? (
          <AddIcon width={35} height={35} fillColor="#e78878" />
        ) : (
          <AddIcon width={35} height={35} fillColor="#93C5FD" />
        )}
      </div>
      <div className="w-4/5 flex">
        <div className="ml-5 flex items-center relative">
          <div
            className={`rounded-full flex justify-center items-center overflow-hidden ${
              blockedByRepetitions || blockedByLimit ? 'grayscale' : ''
            }`}
          >
            <Image
              src="/cano.png"
              width={64}
              height={64}
              alt="profile player"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-center">
            <p
              className={`${
                blockedByRepetitions || blockedByLimit
                  ? 'bg-gray-200 text-gray-400'
                  : 'bg-blue-300 text-black'
              } text-xs px-2 rounded-md font-bold`}
            >
              ATA
            </p>
          </div>
        </div>
        <div className="ml-5 flex-1 flex flex-col">
          <div className="h-1/2 flex items-end">
            <p
              className={`text-base 2xl:text-xl ${
                blockedByRepetitions || blockedByLimit
                  ? 'text-gray-400'
                  : 'font-bold'
              }`}
            >
              {player.name}
            </p>
          </div>
          <div className="h-1/2 flex items-start">
            <p>{player.club}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayerCard
