'use client'

import Header from '@/app/components/header/header'
import { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    // Aqui você pode adicionar a lógica para enviar os dados de login
    console.log('Email:', email)
    console.log('Password:', password)
    // Lógica adicional para enviar os dados para a API ou servidor
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
                  value={email}
                  onChange={handleEmailChange}
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
                  value={password}
                  onChange={handlePasswordChange}
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
