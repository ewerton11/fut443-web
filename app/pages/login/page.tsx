'use client'

import { loginUser } from '@/app/api/userApi'
import Header from '@/app/components/header/header'
import { useAuth } from '@/app/context/useAuth'
import { TLoginSchema, loginSchema } from '@/app/schema/loginSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

export default function LoginPage() {
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
      console.log('data', data)
      //const validUser = (await loginUser(data)) as unknown as IUserResponse

      //if (validUser.token) {
      //login(validUser.token)
      //router.push('/')
      //}
    } catch (error: any) {
      console.error('Error when logging in:', error.message)
    }
  }

  return (
    <div className="bg-slate-100 flex flex-col items-center min-h-screen">
      <Header />

      <main className="w-full flex-grow flex justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col items-center max-w-lg px-6 py-8 bg-white shadow-md"
        >
          <div className="w-4/5 flex items-start mb-6">
            <h1 className="text-black font-bold text-xl">Login</h1>
          </div>

          <div className="w-full flex flex-col items-center relative">
            <div className="w-4/5 flex items-start mb-2">
              <label className="block text-black font-bold text-sm">
                Email
              </label>
            </div>
            <input
              type="email"
              placeholder="ex: alguem@gmail.com"
              {...register('email')}
              className="w-4/5 px-4 py-2 text-black text-sm border rounded-lg border-gray-400
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
              className="w-4/5 px-4 py-2 text-black text-sm border rounded-lg  border-gray-400
              focus:outline-none focus:border-gray-600"
            />
            {errors.password && (
              <span className="absolute -bottom-5 right-12 text-red-500 text-xs">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="w-4/5 flex mt-8">
            <button
              type="submit"
              className="w-1/4 bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-700"
            >
              Entrar
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}
