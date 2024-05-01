import Link from 'next/link'

export default function VerticalMenu() {
  return (
    <nav className="hidden md:block w-1/5 bg-white shadow-md border-r border-gray-300">
      <ul className="h-full flex flex-col items-start">
        <li className="flex items-center w-full h-16 border-b border-gray-100">
          <Link href="/pages/select-team">
            <p className="py-2 px-4 block">Criar time</p>
          </Link>
        </li>
        <li className="flex items-center w-full h-16 border-b border-gray-100">
          <Link href="/pages/select-team">
            <p className="py-2 px-4 block">Premios gratuitos</p>
          </Link>
        </li>
        <li className="flex items-center w-full h-16 border-b border-gray-100">
          <Link href="/pages/select-team">
            <p className="py-2 px-4 block">Amistosos</p>
          </Link>
        </li>
        <li className="flex items-center w-full h-16 border-b border-gray-100">
          <Link href="/pages/select-team">
            <p className="py-2 px-4 block">Pontos corridos</p>
            {/*<p className="py-2 px-4 block">Bolão</p>*/}
          </Link>
        </li>
      </ul>
    </nav>
  )
}
