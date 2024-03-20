import { useAuth } from '@/app/context/useAuth'

const ProtectRoute = ({ children }: ProtectRouteProps) => {
  const { isAuthenticated } = useAuth()

  return isAuthenticated ? (
    <>{children}</>
  ) : (
    <div className="min-h-screen flex justify-center items-center">
      pagina privada fdpppp
    </div>
  )
}

export default ProtectRoute
