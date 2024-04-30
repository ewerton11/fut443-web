export default function VerticalMenu() {
  return (
    <nav className="hidden md:block w-1/5 bg-white shadow-md border-r border-gray-300">
      <ul className="h-full flex flex-col items-start">
        <li className="flex items-center w-full h-16 border-b border-gray-100">
          <p className="py-2 px-4 block">Bolão</p>
        </li>
        <li className="flex items-center w-full h-16 border-b border-gray-100">
          <p className="py-2 px-4 block">Premios gratuitos</p>
        </li>
        <li className="flex items-center w-full h-16 border-b border-gray-100">
          <p className="py-2 px-4 block">Amistosos</p>
        </li>
        <li className="flex items-center w-full h-16 border-b border-gray-100">
          <p className="py-2 px-4 block">Pontos corridos</p>
        </li>
      </ul>
    </nav>
  )
}
