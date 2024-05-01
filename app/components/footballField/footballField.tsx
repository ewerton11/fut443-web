import Image from 'next/image'
import PlayerPosition from './playerPosition'

interface Props {
  attackers?: PlayersData[]
  midfielders?: PlayersData[]
  defenders?: PlayersData[]
  goalkeeper?: PlayersData[]
}

const FootballField = ({
  attackers,
  midfielders,
  defenders,
  goalkeeper,
}: Props) => {
  return (
    <div className="w-3/5 flex justify-center">
      <div className="w-auto relative">
        <Image
          src="/football-field.jpg"
          alt="football field"
          width={430}
          height={608}
          className="w-full h-full"
        />
        {/* Attackers */}
        <PlayerPosition
          x={'left-10'}
          y={'top-24'}
          name={attackers?.[0]?.name}
        />
        <PlayerPosition
          x={'left-1/2 transform -translate-x-1/2'}
          y={'top-16'}
          name={attackers?.[1]?.name}
        />
        <PlayerPosition
          x={'right-10'}
          y={'top-24'}
          name={attackers?.[2]?.name}
        />

        {/* Midfielders */}
        <PlayerPosition
          x={'left-1/4'}
          y={'top-1/2 transform -translate-y-1/2'}
          name={midfielders?.[0]?.name}
        />
        <PlayerPosition
          x={'left-1/2 transform -translate-x-1/2'}
          y={'top-1/3'}
          name={midfielders?.[1]?.name}
        />
        <PlayerPosition
          x={'right-1/4'}
          y={'top-1/2 transform -translate-y-1/2'}
          name={midfielders?.[2]?.name}
        />

        {/* Defenders */}
        <PlayerPosition
          x={'left-7'}
          y={'bottom-32'}
          name={defenders?.[0]?.name}
        />
        <PlayerPosition
          x={'left-1/3'}
          y={'bottom-28'}
          name={defenders?.[1]?.name}
        />
        <PlayerPosition
          x={'right-1/3'}
          y={'bottom-28'}
          name={defenders?.[2]?.name}
        />
        <PlayerPosition
          x={'right-7'}
          y={'bottom-32'}
          name={defenders?.[3]?.name}
        />

        {/* Goalkeeper */}
        <PlayerPosition
          x={'left-1/2 transform -translate-x-1/2'}
          y={'bottom-7'}
          name={goalkeeper?.[0]?.name}
        />
      </div>
    </div>
  )
}

export default FootballField
