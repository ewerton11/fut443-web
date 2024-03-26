import { z } from 'zod'

export const registerSchema = z.object({
  username: z
    .string()
    .min(3, 'Seu nome de usuario deve conter mais de 3 caracteres')
    .max(15, 'Seu nome de usuario nao pode conter mais de 15 caracteres'),
  //nao pode ser null nem conter espaços
  //nome de usuario so pode conter letras e numeros The username must contain only letters and numbers.

  email: z
    .string()
    .email('Formato de E-mail invalido')
    .trim()
    .max(40, 'O E-mail nao pode ter mais de 40 caracteres'),
  //nao pode email null
  //nao pode email com espaço

  password: z.string().min(8, 'Senha inválido').max(30, 'Senha inválido'),
  //nao pode ser null nem conter espaços
})

export type TRegisterSchema = z.infer<typeof registerSchema>
