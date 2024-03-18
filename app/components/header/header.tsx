import { usePathname } from 'next/navigation'
import Link from 'next/link'
import ProtectRoute from '../ProtectRoute/ProtectRoute'

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="w-full flex justify-between items-center bg-neutral-500 h-12">
      <div className="ml-5">
        <Link href="/">
          <h1 className="text-white text-lg font-bold">Fut433</h1>
        </Link>
      </div>
      <nav>
        <ul className="w-auto h-12 mr-5 flex items-center justify-between">
          {pathname === '/' ? (
            <li className="bg-yellow-300 hover:bg-yellow-400 rounded-md p-1 mr-3">
              <Link href="/pages/register">
                <p className="text-black text-sm">Registrar</p>
              </Link>
            </li>
          ) : (
            <li className={`${pathname === '/pages/register' ? 'hidden' : ''}`}>
              <Link href="/pages/register">
                <p className="text-white hover:text-slate-200 text-sm">
                  Registrar
                </p>
              </Link>
            </li>
          )}

          <li className={`${pathname === '/pages/login' ? 'hidden' : ''}`}>
            <Link href="/pages/login">
              <p className="text-white hover:text-slate-200 text-sm">Login</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
