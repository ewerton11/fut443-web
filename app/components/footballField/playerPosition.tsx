import CloseIcon from '@/public/closeIcon'
import PlusIcon from '@/public/plusIcon'

interface FieldPlayerProps {
  player?: PlayersData
  onPlayerRemove: (id: string) => void
}

const PlayerPosition = ({ player, onPlayerRemove }: FieldPlayerProps) => (
  <>
    {player ? (
      <div className="relative">
        <button
          className="bg-black rounded-full w-5 h-5 absolute top-0 -left-3 flex justify-center items-center"
          onClick={() => onPlayerRemove(player.id)}
        >
          <CloseIcon />
        </button>
        <div className="w-10 h-10 sm:w-14 md:w-16 sm:h-14 md:h-16 bg-gray-200 rounded-full"></div>
        <div className="absolute left-1/2 -bottom-5 transform -translate-x-1/2 w-auto bg-gray-200 rounded-lg">
          <p className="text-sm text-center px-2 text-nowrap">{player.name}</p>
        </div>
      </div>
    ) : (
      <div className="w-10 h-10 sm:w-14 sm:h-14 2xl:w-20 2xl:h-20 bg-gray-200 rounded-full flex justify-center items-center">
        <PlusIcon />
      </div>
    )}
  </>
)

export default PlayerPosition
