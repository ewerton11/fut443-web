import Image from 'next/image'
import Link from 'next/link'
import { IM_Fell_Great_Primer } from 'next/font/google'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-primary-blue w-full max-w-full min-h-12 flex justify-between items-center">
        <div className="block md:hidden w-28 h-full">
          <div className="h-full flex items-center">
            <button onClick={toggleMenu} className="pl-4">
              <svg
                className="w-6 h-6 text-white cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        <div className="w-36 h-full flex justify-end">
          <Link
            href="/"
            className="h-full hidden sm:flex justify-center items-center"
          >
            <p className="md:text-3xl text-xl text-white font-im_fell">
              FUT433
            </p>
          </Link>
        </div>
        <div className="w-48 h-full flex justify-start">
          <div className="flex justify-center items-center px-2">
            <Link
              href="/pages/register"
              className="p-1 flex justify-center items-center bg-white rounded-md"
            >
              <p className="text-blue-600 text-sm tracking-wider font-medium">
                Registrar
              </p>
            </Link>
          </div>
          <div className="flex justify-center items-center px-2">
            <Link
              href="/pages/login"
              className="flex justify-center items-center"
            >
              <p className="text-white text-sm tracking-wider font-medium">
                Login
              </p>
            </Link>
          </div>
        </div>
      </header>
      {isMenuOpen && (
        <div className="absolute mt-12 bg-primary-blue w-full md:hidden z-50">
          <ul className="flex flex-col items-center">
            <li className="my-3">
              <Link href="/pagina1">
                <p className="text-white text-lg">Página 1</p>
              </Link>
            </li>
            <li className="my-3">
              <Link href="/pagina2">
                <p className="text-white text-lg">Página 2</p>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}
