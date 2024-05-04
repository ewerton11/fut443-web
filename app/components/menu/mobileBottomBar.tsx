import ChampionIcon from '@/public/champions'
import FindIcon from '@/public/find'
import HomeIcon from '@/public/home'
import RecentIcon from '@/public/recent'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'

const MobileBottomBar = () => {
  const pathname = usePathname()

  return (
    <div className="block sm:hidden sticky bottom-0 z-50 h-12 w-full bg-white shadow-md">
      <nav className="w-full h-full flex px-4">
        <div className="w-1/4 h-full">
          <Link
            href="/"
            className="w-full h-full flex flex-col justify-center items-center"
          >
            <div className="w-1/2 h-1/2">
              <HomeIcon
                width={20}
                height={20}
                strokeColor={pathname === '/' ? '#3b3b3b' : '#808080'}
              />
            </div>
            <div className="w-1/2 flex justify-center items-center">
              <p
                className={`text-xs
                  ${pathname === '/' ? 'text-black' : 'text-customGray'}
                `}
              >
                Home
              </p>
            </div>
          </Link>
        </div>
        <div className="w-1/4 h-full">
          <Link
            href="/"
            className="w-full h-full flex flex-col justify-center items-center"
          >
            <div className="w-1/2 h-1/2">
              <ChampionIcon
                width={100}
                height={100}
                fill={pathname === '/champion' ? '#3b3b3b' : '#808080'}
              />
            </div>
            <div className="w-1/2 flex justify-center items-center">
              <p
                className={`text-xs
                  ${pathname === '/champion' ? 'text-black' : 'text-customGray'}
                `}
              >
                Torneios
              </p>
            </div>
          </Link>
        </div>
        <div className="w-1/4 h-full">
          <Link
            href="/"
            className="w-full h-full flex flex-col justify-center items-center"
          >
            <div className="w-1/2 h-1/2">
              <FindIcon
                width={100}
                height={100}
                fill="#ffffff"
                strokeColor={pathname === '/find' ? '#3b3b3b' : '#808080'}
              />
            </div>
            <div className="w-1/2 flex justify-center items-center">
              <p
                className={`text-xs
                  ${pathname === '/find' ? 'text-black' : 'text-customGray'}
                `}
              >
                Buscar
              </p>
            </div>
          </Link>
        </div>
        <div className="w-1/4 h-full">
          <Link
            href="/"
            className="w-full h-full flex flex-col justify-center items-center"
          >
            <div className="w-1/2 h-1/2">
              <RecentIcon
                width={100}
                height={100}
                fill="#ffffff"
                strokeColor={pathname === '/recent' ? '#3b3b3b' : '#808080'}
              />
            </div>
            <div className="w-1/2 flex justify-center items-center">
              <p
                className={`text-xs
                  ${pathname === '/recent' ? 'text-black' : 'text-customGray'}
                `}
              >
                Recentes
              </p>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default MobileBottomBar
