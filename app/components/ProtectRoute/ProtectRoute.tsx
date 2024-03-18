import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { checkAuthentication } from '@/app/utils/auth/auth'

const ProtectRoute = ({ children }: ProtectRouteProps) => {
  const [noAccess, setNoAccess] = useState<boolean>(true)
  const router = useRouter()

  useEffect(() => {
    const isAuthenticated = checkAuthentication()

    if (!isAuthenticated) {
      router.push('/pages/register')
    } else {
      setNoAccess(false)
    }
  }, [router])

  return noAccess ? (
    <div className="min-h-screen flex justify-center items-center">
      pagina privada fdpppp
    </div>
  ) : (
    <>{children}</>
  )
}

export default ProtectRoute
