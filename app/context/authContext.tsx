'use client'

import { createContext, useEffect, useState } from 'react'
import { IChildrenProps } from '../types/childrenProps'

export const AuthContext = createContext<AuthContextData | undefined>(undefined)

// Provedor do contexto de autenticação
export const AuthProvider = ({ children }: IChildrenProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    // Verificar se o token está armazenado no localStorage ou sessionStorage ao carregar a página
    const storedToken = localStorage.getItem('token')
    if (storedToken) {
      setToken(storedToken)
      setIsAuthenticated(true)
    }
  }, [])

  const login = (newToken: string) => {
    localStorage.setItem('token', newToken)
    setToken(newToken)
    setIsAuthenticated(true)
  }

  const logout = () => {
    localStorage.removeItem('token')
    setToken(null)
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
