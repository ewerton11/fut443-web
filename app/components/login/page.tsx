'use client'

import { loginUser } from '@/app/api/userApi'
import Header from '@/app/components/header/header'
import { useAuth } from '@/app/context/useAuth'
import { TLoginSchema, loginSchema } from '@/app/schema/loginSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
  })

  const router = useRouter()

  const { login } = useAuth()

  const onSubmit = async (data: TLoginSchema) => {
    try {
      const validUser = (await loginUser(data)) as unknown as IUserResponse

      if (validUser.token) {
        localStorage.setItem('token', validUser.token)
        Login(validUser.token)
        router.push('/')
      }
    } catch (error: any) {
      console.error('Erro ao fazer login:', error.message)
    }
  }

  return (
    <div className="bg-slate-100 flex flex-col items-center min-h-screen">
      <Header />

      <main className="w-full flex-grow flex justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-lg px-6 py-8 bg-white rounded-lg shadow-md"
        >
          <h1 className="text-black font-bold text-xl mb-6">Login</h1>

          <div className="w-full">
            <label className="block text-black font-bold text-sm mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Seu email"
              {...register('email')}
              className="w-full px-4 py-2 text-black text-sm border-b focus:outline-none
              focus:border-b focus:border-gray-300"
            />
            {errors.email && (
              <span className="text-red-500 text-xs">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="w-full mt-6">
            <label className="block text-black font-bold text-sm mb-2">
              Senha
            </label>
            <input
              type="password"
              placeholder="Sua senha"
              {...register('password')}
              className="w-full px-4 py-2 text-black text-sm border-b focus:outline-none
            focus:border-b focus:border-gray-300"
            />
            {errors.password && (
              <span className="text-red-500 text-xs">
                {errors.password.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md p-2 mt-7 w-full hover:bg-blue-700"
          >
            Entrar
          </button>
        </form>
      </main>
    </div>
  )
}
