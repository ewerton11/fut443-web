import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <header className="fixed top-0 z-100 bg-primary-blue w-full h-12 flex justify-between items-center">
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
        <div className="w-36 h-full">
          <Link href="/" className="h-full flex justify-center items-center">
            <Image
              src="/Fut443-logo.png"
              width={100}
              height={100}
              alt="logo fut443"
              className="w-4/5 h-4/5 object-cover hidden md:block"
            />
            <Image
              src="/F-logo.png"
              width={100}
              height={100}
              alt="logo fut443"
              className="w-4/5 h-4/5 object-cover md:hidden"
            />
          </Link>
        </div>
        <div className="w-20 h-full">
          <div className="w-full h-full pr-4 flex justify-end items-center">
            <Link
              href="/pages/login"
              className="w-4/5 h-3/5 flex justify-center items-center bg-white rounded-md"
            >
              <p className="text-primary-blue text-sm tracking-wider font-medium">
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
