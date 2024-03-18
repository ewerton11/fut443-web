'use client'

import Header from '@/app/components/header/header'
import { createUser } from '@/app/services/apiService'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Register() {
  const router = useRouter()

  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    e.preventDefault()
    try {
      const newUser = (await createUser(userData)) as unknown as IUserResponse

      if (newUser.token) {
        localStorage.setItem('token', newUser.token)

        router.push('/')
      }
    } catch (error: any) {
      console.error('Erro ao criar usuário:', error.message)
    }
  }

  return (
    <div className="bg-slate-100 flex flex-col items-center min-h-screen">
      <Header />

      <main className="w-2/5 flex flex-col">
        <div className="w-full h-auto">
          <div className="w-auto h-20 flex items-center">
            <h1 className="text-black font-bold text-xl">
              Registro de Usuário
            </h1>
          </div>

          <div className="w-full h-auto">
            <div className="w-full">
              <h1 className="text-black font-bold text-sm">
                Informação do usuario
              </h1>
              <div className="w-full h-10 mt-3">
                <input
                  type="text"
                  name="username"
                  value={userData.username}
                  onChange={handleChange}
                  placeholder="Seu nome de usuário"
                  className="w-full h-full pl-4 text-black text-sm border-b focus:outline-none
                    focus:border-b focus:border-gray-300"
                />
              </div>
            </div>
            <div className="w-full mt-5">
              <h1 className="text-black font-bold text-sm">Criar login</h1>
              <div className="w-full h-10 mt-3">
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                  placeholder="Seu email"
                  className="w-full h-full pl-4 text-black text-sm border-b focus:outline-none
                    focus:border-b focus:border-gray-300"
                />
              </div>
              <div className="w-full h-10 mt-3">
                <input
                  type="password"
                  name="password"
                  value={userData.password}
                  onChange={handleChange}
                  placeholder="Sua senha"
                  className="w-full h-full pl-4 text-black text-sm border-b focus:outline-none
                    focus:border-b focus:border-gray-300"
                />
              </div>
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-blue-500 text-white rounded-md p-2 mt-7 w-full hover:bg-blue-700"
            >
              Registrar
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
