'use client'

// Importe os módulos necessários
import { useEffect, useState } from 'react'
import ProtectRoute from '@/app/components/ProtectRoute/ProtectRoute'
import { useAuth } from '@/app/context/useAuth'
import { getUserData } from '@/app/api/userApi'

export default function Home() {
  const [userData, setUserData] = useState(null)
  const { isAuthenticated } = useAuth() // Use o hook useAuth para verificar a autenticação

  // Função para obter os dados do usuário
  const handleGetUserData = async () => {
    try {
      if (isAuthenticated) {
        const data = await getUserData()
        setUserData(data)
      } else {
        throw new Error('Usuário não autenticado')
      }
    } catch (error) {
      console.error('Erro ao obter os dados do usuário:', error)
    }
  }

  // Use useEffect para chamar handleGetUserData na montagem do componente
  useEffect(() => {
    handleGetUserData()
  }, [isAuthenticated]) // Chame useEffect sempre que o estado de autenticação (isLoggedIn) mudar

  return (
    <ProtectRoute>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Teste de Autenticação</h1>
        <div className="mt-4">
          {userData && (
            <pre className="bg-gray-200 p-4 rounded text-black">
              {JSON.stringify(userData, null, 2)}
            </pre>
          )}
        </div>
      </div>
    </ProtectRoute>
  )
}
