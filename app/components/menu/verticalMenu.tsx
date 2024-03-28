import Link from 'next/link'

export default function VerticalMenu() {
  return (
    <nav className="sticky top-0 h-full w-1/4 bg-white shadow-md">
      <ul className="h-full flex flex-col items-start">
        <li className="w-full">
          <Link href="/settings">
            <p className="text-black font-semibold py-2 px-4 block">
              Configurações
            </p>
          </Link>
        </li>
        <li className="w-full">
          <Link href="/profile">
            <p className="text-black font-semibold py-2 px-4 block">
              Perfil de Usuário
            </p>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
