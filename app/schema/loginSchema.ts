import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email('Email inválido').max(40, 'Email inválido'),
  password: z.string().min(8, 'Senha inválido').max(30, 'Senha inválido'),
})

export type TLoginSchema = z.infer<typeof loginSchema>
