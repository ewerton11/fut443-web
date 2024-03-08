import Header from '@/app/components/header/header'
import Link from 'next/link'

export default function Register() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="h-screen grid place-items-center bg-slate-100">
        <div className="w-2/5 h-full">
          <div className="w-full h-7 mt-7">
            <h1 className="text-black text-lg">Registro de Usuário</h1>
          </div>
          <div className="w-full h-screen mt-7">
            <div className="w-full h-screen">
              <div className="w-full">
                <div className="w-full mt-7">
                  <h1 className="text-black text-sm">Informação pessoal</h1>
                  <div className="w-full h-10 mt-7">
                    <input
                      type="text"
                      name="name"
                      placeholder="Seu nome"
                      className="w-full h-full pl-4 text-black text-sm focus:outline-none"
                    />
                  </div>
                </div>
                <div className="w-full mt-7">
                  <h1 className="text-black text-sm">Criar login</h1>
                  <div className="w-full h-10 mt-7">
                    <input
                      type="email"
                      name="email"
                      placeholder="Seu email"
                      className="w-full h-full pl-4 text-black text-sm focus:outline-none"
                    />
                  </div>
                  <div className="w-full h-10 mt-3">
                    <input
                      type="password"
                      name="password"
                      placeholder="Sua senha"
                      className="w-full h-full pl-4 text-black text-sm focus:outline-none"
                    />
                  </div>
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
        </div>
      </main>
    </div>
  )
}
