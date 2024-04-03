import Image from 'next/image'

function Offers() {
  return (
    <div className="w-full h-44 border-b border-gray-300 flex items-center justify-between">
      <div className="ml-4">
        <h1 className="text-blue-800 font-bold text-lg">
          Oferta Especial: Camisa de Futebol Grátis!
        </h1>
        <p className="text-gray-700">
          Aproveite esta oferta especial por tempo limitado!
        </p>
        <button className="mt-2 bg-blue-500 hover:bg-blue-700 rounded p-1">
          <p className="text-white text-sm">Participar</p>
        </button>
      </div>
      <div className="w-1/3 h-full flex justify-center items-center bg-gradient-to-r from-transparent via-blue-200 to-transparent">
        <Image
          src="/nensee.png"
          alt="Uniforme Fluminense"
          width={150}
          height={150}
          className="rounded-lg"
        />
      </div>
    </div>
  )
}

export default Offers
