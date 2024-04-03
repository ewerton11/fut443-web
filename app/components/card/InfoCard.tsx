import { IInfoCardProps } from '@/app/types/infoCardProps'

const InfoCard = ({
  title,
  category,
  date,
  price,
  participants,
}: IInfoCardProps) => {
  return (
    <div className="w-full h-32 flex border-b border-gray-200">
      <div className="w-2/5 h-full">
        <div className="h-full flex flex-col justify-center">
          <div className="w-full h-1/3 flex items-end">
            <div className="w-auto px-2 bg-red-500 rounded-lg">
              <p className="text-xs md:text-sm text-white text-center">
                Destaque
              </p>
            </div>
          </div>
          <div className="w-full h-1/3 flex items-center">
            <h2 className="text-sm sm:text-base font-bold">{title}</h2>
          </div>
          <div className="w-full h-1/3 flex items-center">
            <h3 className="text-sm sm:text-base text-gray-500">{category}</h3>
          </div>
        </div>
      </div>

      <div className="w-1/5">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="mb-1">
            <h1 className="text-xs sm:text-sm text-gray-500">{date}</h1>
          </div>
          <div className="w-4/5 mt-1 flex justify-center">
            <button className="p-1 rounded-md border border-gray-300 shadow-md">
              <p className="text-xs sm:text-sm text-red-500">Detalhes</p>
            </button>
          </div>
        </div>
      </div>

      <div className="w-2/5">
        <div className="w-full h-full">
          <div className="h-full flex flex-col items-end">
            <div className="w-auto h-1/3 flex items-center">
              <p className="text-base text-red-500 font-bold">{price}</p>
            </div>
            <div className="w-auto lg:w-full max-h-1/3 flex justify-end">
              <button className="lg:w-2/5 bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 p-2 rounded-md shadow-md hover:shadow-lg">
                <p className="text-white text-xs sm:text-sm">Partida Gratís</p>
              </button>
            </div>
            <div className="h-1/3 flex justify-center items-center">
              <p className="text-gray-500 text-center text-xs sm:text-sm">
                {participants}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoCard
