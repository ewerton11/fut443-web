'use client'

import { loginUser } from '@/app/api/userApi'
import Header from '@/app/components/header/header'
import { useAuth } from '@/app/context/useAuth'
//import { TLoginSchema, loginSchema } from '@/app/schema/loginSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const LoginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(22, 'A senha deve ter pelo menos 6 caracteres'),
})

type TLoginSchema = z.infer<typeof LoginSchema>

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginSchema>({
    resolver: zodResolver(LoginSchema),
  })

  //const router = useRouter()

  //const { login } = useAuth()

  const onSubmit = async (data: TLoginSchema) => {
    try {
      console.log('data', data)

      /*
      const validUser = (await loginUser(data)) as unknown as IUserResponse

      if (validUser.token) {
        localStorage.setItem('token', validUser.token)
        Login(validUser.token)
        router.push('/')
      }
      */
    } catch (error: any) {
      console.error('Erro ao fazer login:', error.message)
    }
  }

  return (
    <div className="bg-slate-100 flex flex-col items-center min-h-screen">
      <Header />

      <main className="w-2/5 flex flex-col">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full h-auto">
          <div className="w-auto h-20 flex items-center">
            <h1 className="text-black font-bold text-xl">Login</h1>
          </div>

          <div className="w-full h-auto">
            <div className="w-full">
              <h1 className="text-black font-bold text-sm">Email</h1>
              <div className="w-full h-10 mt-3">
                <label htmlFor="email">email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Seu email"
                  {...register('email')}
                  className="w-full h-full pl-4 text-black text-sm border-b focus:outline-none
                    focus:border-b focus:border-gray-300"
                />
                {errors.email && (
                  <span className="text-red-500 text-xs">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <h1 className="text-black font-bold text-sm mt-5">Senha</h1>
              <div className="w-full h-10 mt-3">
                <label htmlFor="password">password</label>
                <input
                  id="password"
                  type="password"
                  placeholder="Sua senha"
                  {...register('password')}
                  className="w-full h-full pl-4 text-black text-sm border-b focus:outline-none
                    focus:border-b focus:border-gray-300"
                />
                {errors.password && (
                  <span className="text-red-500 text-xs">
                    {errors.password.message}
                  </span>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md p-2 mt-7 w-full hover:bg-blue-700"
            >
              Entrar
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}
