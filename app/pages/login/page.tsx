'use client'

import { loginUser } from '@/app/api/userApi'
import Header from '@/app/components/header/header'
import MobileBottomBar from '@/app/components/menu/mobileBottomBar'
import { useAuth } from '@/app/context/useAuth'
import { TLoginSchema, loginSchema } from '@/app/schema/loginSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
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

      <main className="mt-12 pb-12 sm:pb-0 w-full flex-grow flex flex-col items-center">
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

          <div className="w-4/5 h-auto flex flex-col justify-center items-center mt-8">
            <button
              type="submit"
              className="w-full h-3/4 flex justify-center items-center bg-primary-blue rounded-lg p-2 hover:bg-blue-500"
            >
              <p className="text-white text-base tracking-wider font-medium">
                Entrar
              </p>
            </button>
          </div>
        </form>
        <div className="w-full flex justify-center mt-8">
          <p className="text-black font-normal">Esqueceu a senha?</p>
          <Link href="/pages/register">
            <p className="text-primary-blue font-normal ml-1">Click aqui</p>
          </Link>
        </div>
        <div className="w-full flex justify-center mt-8">
          <button className="w-36 h-7 bg-primary-blue hover:bg-blue-500 flex justify-center items-center rounded-lg ">
            <p className="text-white text-base tracking-wider font-medium">
              Criar conta
            </p>
          </button>
        </div>
      </main>
      <MobileBottomBar />
    </div>
  )
}
