import { useContext } from 'react'
import { AuthContext } from './authContext'

// Hook personalizado para acessar o contexto de autenticação
export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
