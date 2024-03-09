'use client'

import Header from '@/app/components/header/header'
import { useState } from 'react'

export default function Register() {
  const [showNavigation, setShowNavigation] = useState(false)

  return (
    <div className="bg-slate-100 flex flex-col items-center min-h-screen">
      <Header showNavigation={showNavigation} />

      <main className="w-2/5 flex flex-col">
        <div className="w-full h-auto">
          <div className="w-auto h-20 flex items-center">
            <h1 className="text-black font-bold text-xl">
              Registro de Usuário
            </h1>
          </div>

          <div className="w-full h-auto">
            <div>
              <h1 className="text-black font-bold text-sm">
                Informação pessoal
              </h1>
              <div className="w-full h-10 mt-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Seu nome"
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
                  placeholder="Seu email"
                  className="w-full h-full pl-4 text-black text-sm border-b focus:outline-none
                    focus:border-b focus:border-gray-300"
                />
              </div>
              <div className="w-full h-10 mt-3">
                <input
                  type="password"
                  name="password"
                  placeholder="Sua senha"
                  className="w-full h-full pl-4 text-black text-sm border-b focus:outline-none
                    focus:border-b focus:border-gray-300"
                />
              </div>
            </div>

            <button
              type="submit"
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
