import React from 'react'
import AddIcon from '@/public/add'
import Image from 'next/image'

interface Player {
  name: string
  team: string
}

interface PlayerCardProps {
  player: Player
}

const PlayerCard = ({ player }: PlayerCardProps) => {
  return (
    <div className="w-full h-24 flex border-b border-gray-300 cursor-pointer">
      <div className="ml-5 flex justify-center items-center">
        <AddIcon width={35} height={35} fillColor="#A8A8A8" />
      </div>
      <div className="w-4/5 flex">
        <div className="ml-5 flex items-center relative">
          <div className="rounded-full overflow-hidden">
            <Image
              src="/cano.png"
              width={60}
              height={60}
              alt="profile player"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-center">
            <p className="bg-white text-black text-xs px-2 rounded-md font-bold">
              ATA
            </p>
          </div>
        </div>
        <div className="ml-5 flex-1 flex flex-col">
          <div className="h-1/2 flex items-end">
            <p className="font-bold">{player.name}</p>
          </div>
          <div className="h-1/2 flex items-start">
            <p>{player.team}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayerCard
