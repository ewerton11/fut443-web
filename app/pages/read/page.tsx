'use client'

import { useState } from 'react'
import { getUserData } from '@/app/services/apiService'

export default function Homeee() {
  const [userData, setUserData] = useState(null)
  const [error, setError] = useState(null)

  const handleGetUserData = async () => {
    try {
      const data = await getUserData()
      setUserData(data)
    } catch (error: any) {
      setError(error.message)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Teste de Autenticação</h1>
      <button
        onClick={handleGetUserData}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Obter Dados do Usuário
      </button>
      <div className="mt-4">
        {error && <div className="text-red-500">{error}</div>}
        {userData && (
          <pre className="bg-gray-200 p-4 rounded text-black">
            {JSON.stringify(userData, null, 2)}
          </pre>
        )}
      </div>
    </div>
  )
}
