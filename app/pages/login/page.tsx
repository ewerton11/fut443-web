'use client'

import { loginUser } from '@/app/api/userApi'
import Header from '@/app/components/header/header'
import { useAuth } from '@/app/context/useAuth'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Login() {
  const router = useRouter()

  const { login } = useAuth()

  const [userData, setUserData] = useState({
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
      const validUser = (await loginUser(userData)) as unknown as IUserResponse

      if (validUser.token) {
        localStorage.setItem('token', validUser.token)

        login(validUser.token)

        router.push('/')
      }
    } catch (error: any) {
      console.error('Erro ao fazer login:', error.message)
    }
  }

  return (
    <div className="bg-slate-100 flex flex-col items-center min-h-screen">
      <Header />

      <main className="w-2/5 flex flex-col">
        <div className="w-full h-auto">
          <div className="w-auto h-20 flex items-center">
            <h1 className="text-black font-bold text-xl">Login</h1>
          </div>

          <div className="w-full h-auto">
            <div className="w-full">
              <h1 className="text-black font-bold text-sm">Email</h1>
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

              <h1 className="text-black font-bold text-sm mt-5">Senha</h1>
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
              Entrar
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
