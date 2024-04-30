interface FieldPlayerProps {
  x: string
  y: string
  name: string
}

const PlayerPosition = ({ x, y, name }: FieldPlayerProps) => (
  <div className={`absolute ${x} ${y} z-10 flex flex-col items-center`}>
    <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
    <p className="w-full text-sm text-center bg-gray-200 rounded-lg">{name}</p>
  </div>
)

export default PlayerPosition
