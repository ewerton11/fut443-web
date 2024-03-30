'use client'

import { createUser } from '@/app/api/userApi'
import Header from '@/app/components/header/header'
import { useAuth } from '@/app/context/useAuth'
import { TRegisterSchema, registerSchema } from '@/app/schema/registerSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterSchema>({
    resolver: zodResolver(registerSchema),
  })

  const router = useRouter()

  const { login } = useAuth()

  const onSubmit = async (data: TRegisterSchema): Promise<void> => {
    try {
      //const newUser = (await createUser(data)) as unknown as IUserResponse

      console.log('data', data)

      //if (newUser.token) {
      //login(newUser.token)
      //router.push('/')
      //}
    } catch (error: any) {
      console.error('Error creating user:', error.message)
    }
  }

  return (
    <div className="bg-slate-100 flex flex-col items-center min-h-screen">
      <Header />

      <main className="mt-12 w-full flex-grow flex justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col items-center max-w-lg px-6 py-8 bg-white shadow-md"
        >
          <div className="w-4/5 flex items-start mb-6">
            <h1 className="text-black font-bold text-xl">Registrar</h1>
          </div>

          <div className="w-full flex flex-col items-center relative">
            <div className="w-4/5 flex items-start mb-2">
              <label className="block text-black font-bold text-sm">
                Nome de usuario
              </label>
            </div>
            <input
              type="text"
              placeholder="Seu nome de usuário"
              {...register('username')}
              className="w-4/5 px-4 py-3 text-black text-sm border rounded-lg border-gray-400
              focus:outline-none focus:border-gray-600"
            />
            {errors.username && (
              <span className="absolute -bottom-5 right-12 text-red-500 text-xs">
                {errors.username.message}
              </span>
            )}
          </div>

          <div className="w-full mt-6 flex flex-col items-center relative">
            <div className="w-4/5 flex items-start mb-2">
              <label className="block text-black font-bold text-sm">
                Email
              </label>
            </div>
            <input
              type="email"
              placeholder="Seu email"
              {...register('email')}
              className="w-4/5 px-4 py-3 text-black text-sm border rounded-lg  border-gray-400
              focus:outline-none focus:border-gray-600"
            />
            {errors.email && (
              <span className="absolute -bottom-5 right-12 text-red-500 text-xs">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="w-full mt-6 flex flex-col items-center relative">
            <div className="w-4/5 flex items-start mb-2">
              <label className="block text-black font-bold text-sm">
                Senha
              </label>
            </div>
            <input
              type="password"
              placeholder="Sua senha"
              {...register('password')}
              className="w-4/5 px-4 py-3 text-black text-sm border rounded-lg  border-gray-400
              focus:outline-none focus:border-gray-600"
            />
            {errors.password && (
              <span className="absolute -bottom-5 right-12 text-red-500 text-xs">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="w-4/5 flex justify-between items-center mt-8">
            <button
              type="submit"
              className="w-1/4 bg-primary-blue text-white font-normal rounded-lg p-2 hover:bg-blue-500"
            >
              Criar
            </button>
            <Link href="/pages/login">
              <p className="text-primary-blue font-normal">Login</p>
            </Link>
          </div>
        </form>
      </main>
    </div>
  )
}
