'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { IChildrenProps } from '../types/childrenProps'

export const AuthContext = createContext<AuthContextData | undefined>(undefined)

// Provedor do contexto de autenticação
export const AuthProvider = ({ children }: IChildrenProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      setIsLoggedIn(true)
    }
  }, [])

  const login = () => {
    // Lógica para fazer login (por exemplo, definir isLoggedIn como true)
    setIsLoggedIn(true)
  }

  const logout = () => {
    // Lógica para realizar o logout
    setIsLoggedIn(false)
    localStorage.removeItem('token') // Limpar o token do localStorage ao fazer logout
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
