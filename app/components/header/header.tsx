import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-neutral-500 h-12 p-4">
      <div>
        <h1 className="text-white text-lg font-bold">Meu Site</h1>
      </div>
      <nav className="flex items-center space-x-4">
        <div className="bg-yellow-300 rounded-md p-1">
          <Link href="pages/register">
            <p className="text-black text-sm">Registrar</p>
          </Link>
        </div>
        <Link href="/login">
          <p className="text-white text-sm">Login</p>
        </Link>
      </nav>
    </header>
  )
}
