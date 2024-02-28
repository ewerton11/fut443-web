import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-red-400 h-14 p-4">
      <div>
        <h1 className="text-white text-lg font-bold">Meu Site</h1>
      </div>
      <nav className="flex items-center space-x-4">
        <Link href="/register">
          <p className="text-white text-sm">Registrar</p>
        </Link>
        <Link href="/login">
          <p className="text-white text-sm">Login</p>
        </Link>
      </nav>
    </header>
  )
}
