import Link from 'next/link'

export default function Header({ showNavigation }) {
  return (
    <header className="w-full flex justify-between items-center bg-neutral-500 h-12">
      <div>
        <Link href="/">
          <h1 className="text-white text-lg font-bold">Meu Site</h1>
        </Link>
      </div>
      <nav>
        <ul className="w-auto mr-10 flex items-center justify-between">
          {showNavigation && (
            <li className="bg-yellow-300 hover:bg-yellow-400 rounded-md p-1 mr-3">
              <Link href="register">
                <p className="text-black text-sm">Registrar</p>
              </Link>
            </li>
          )}
          <li>
            <Link href="login">
              <p className="text-white hover:text-slate-200 text-sm">Login</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
