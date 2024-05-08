import Image from 'next/image'
import PlayerPosition from './playerPosition'

interface Props {
  attackers?: PlayersData[]
  midfielders?: PlayersData[]
  defenders?: PlayersData[]
  goalkeeper?: PlayersData[]
  onPlayerRemove: (id: string) => void
}

const FootballField = ({
  attackers,
  midfielders,
  defenders,
  goalkeeper,
  onPlayerRemove,
}: Props) => {
  const ST = attackers?.find((st) => st.specificPosition === 'ST')
  const LW = attackers?.find((lw) => lw.specificPosition === 'LW')
  const RW = attackers?.find((rw) => rw.specificPosition === 'RW')

  return (
    <div className="w-full field-sm:w-[430px] h-[380px] sm:w-[600px] sm:h-[530px] xl:w-[683px] xl:h-[580px] 2xl:w-[820px] 2xl:h-[700px] relative">
      <Image
        src="/football-field.png"
        alt="football field"
        width={1000}
        height={1000}
        className="w-full h-full sm:object-fill"
      />

      {/* Attackers */}
      <div
        className={`absolute left-28 sm:left-44 top-12 sm:top-16 2xl:left-[30%] 2xl:top-[13%] z-10 flex flex-col items-center`}
      >
        <PlayerPosition player={LW} onPlayerRemove={onPlayerRemove} />
      </div>
      <div
        className={`absolute left-1/2 transform -translate-x-1/2 top-10 2xl:top-[7%] z-10 flex flex-col items-center`}
      >
        <PlayerPosition player={ST} onPlayerRemove={onPlayerRemove} />
      </div>
      <div
        className={`absolute right-28 sm:right-44 2xl:right-[30%] top-12 2xl:top-[13%] sm:top-16 z-10 flex flex-col items-center`}
      >
        <PlayerPosition player={RW} onPlayerRemove={onPlayerRemove} />
      </div>

      {/* Midfielders */}
      <div
        className={`absolute left-28 sm:left-44 xl:left-[32%] 2xl:left-[30%] bottom-[52%] 2xl:bottom-[50%] z-10 flex flex-col items-center`}
      >
        <PlayerPosition
          player={midfielders?.[0]}
          onPlayerRemove={onPlayerRemove}
        />
      </div>
      <div
        className={`absolute left-1/2 transform -translate-x-1/2 top-28 sm:top-36 2xl:top-[27%] z-10 flex flex-col items-center`}
      >
        <PlayerPosition
          player={midfielders?.[1]}
          onPlayerRemove={onPlayerRemove}
        />
      </div>
      <div
        className={`absolute right-28 sm:right-44 xl:right-[32%] 2xl:right-[30%] bottom-[52%] 2xl:bottom-[50%] z-10 flex flex-col items-center`}
      >
        <PlayerPosition
          player={midfielders?.[2]}
          onPlayerRemove={onPlayerRemove}
        />
      </div>

      {/* Defenders */}
      <div
        className={`absolute left-16 bottom-36 sm:left-24 xl:left-28 2xl:left-[17%] sm:bottom-44 xl:bottom-56 2xl:bottom-[35%] z-10 flex flex-col items-center`}
      >
        <PlayerPosition
          player={defenders?.[0]}
          onPlayerRemove={onPlayerRemove}
        />
      </div>
      <div
        className={`absolute left-36 bottom-32 sm:left-48 xl:left-56 2xl:left-[35%] sm:bottom-40 xl:bottom-52 z-10 flex flex-col items-center`}
      >
        <PlayerPosition
          player={defenders?.[1]}
          onPlayerRemove={onPlayerRemove}
        />
      </div>
      <div
        className={`absolute right-36 bottom-32 sm:right-48 xl:right-56 2xl:right-[35%] sm:bottom-40 xl:bottom-52 z-10 flex flex-col items-center`}
      >
        <PlayerPosition
          player={defenders?.[2]}
          onPlayerRemove={onPlayerRemove}
        />
      </div>
      <div
        className={`absolute right-16 bottom-36 sm:right-24 xl:right-28 2xl:right-[17%] sm:bottom-44 xl:bottom-56 2xl:bottom-[35%] z-10 flex flex-col items-center`}
      >
        <PlayerPosition
          player={defenders?.[3]}
          onPlayerRemove={onPlayerRemove}
        />
      </div>

      {/* Goalkeeper */}
      <div
        className={`absolute left-1/2 transform -translate-x-1/2 bottom-14 sm:bottom-20 xl:bottom-28 z-10 flex flex-col items-center`}
      >
        <PlayerPosition
          player={goalkeeper?.[0]}
          onPlayerRemove={onPlayerRemove}
        />
      </div>
    </div>
  )
}

export default FootballField
