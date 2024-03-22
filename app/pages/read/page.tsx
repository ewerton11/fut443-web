'use client'

import { getUserData } from '@/app/api/userApi'
import { useAuth } from '@/app/context/useAuth'
import { useEffect, useState } from 'react'

export default function Read() {
  const [userData, setUserData] = useState(null)
  const { isAuthenticated } = useAuth()

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isAuthenticated) {
          const data = await getUserData()
          setUserData(data)
        }
      } catch (error) {
        console.error('Error fetching user data:', error)
        setUserData(null)
      }
    }

    fetchData()
  }, [isAuthenticated])

  if (!userData) {
    return null
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Teste de Autenticação</h1>
      <div className="mt-4">
        <pre className="bg-gray-200 p-4 rounded text-black">
          {JSON.stringify(userData, null, 2)}
        </pre>
      </div>
    </div>
  )
}
