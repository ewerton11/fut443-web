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
    <div className="w-1/2 flex justify-center">
      <div className="w-auto relative" style={{ height: '90vh' }}>
        <Image
          src="/football-field.png"
          alt="football field"
          width={1000}
          height={1000}
          className="w-full h-full"
        />
        {/* Attackers */}
        <PlayerPosition
          x={'left-44'}
          y={'top-20'}
          name={attackers?.[0]?.name}
        />
        <PlayerPosition
          x={'left-1/2 transform -translate-x-1/2'}
          y={'top-10'}
          name={attackers?.[1]?.name}
        />
        <PlayerPosition
          x={'right-44'}
          y={'top-20'}
          name={attackers?.[2]?.name}
        />

        {/* Midfielders */}
        <PlayerPosition
          x={'left-1/3'}
          y={'bottom-1/2'}
          name={midfielders?.[0]?.name}
        />
        <PlayerPosition
          x={'left-1/2 transform -translate-x-1/2'}
          y={'top-36'}
          name={midfielders?.[1]?.name}
        />
        <PlayerPosition
          x={'right-1/3'}
          y={'bottom-1/2'}
          name={midfielders?.[2]?.name}
        />

        {/* Defenders */}
        <PlayerPosition
          x={'left-32'}
          y={'bottom-56'}
          name={defenders?.[0]?.name}
        />
        <PlayerPosition
          x={'left-1/3'}
          y={'bottom-44'}
          name={defenders?.[1]?.name}
        />
        <PlayerPosition
          x={'right-1/3'}
          y={'bottom-44'}
          name={defenders?.[2]?.name}
        />
        <PlayerPosition
          x={'right-32'}
          y={'bottom-56'}
          name={defenders?.[3]?.name}
        />

        {/* Goalkeeper */}
        <PlayerPosition
          x={'left-1/2 transform -translate-x-1/2'}
          y={'bottom-24'}
          name={goalkeeper?.[0]?.name}
        />
      </div>
    </div>
  )
}

export default FootballField
