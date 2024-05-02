import * as z from 'zod';

export const loginSchema = z.object({
  email: z
    .string()
    .email({ message: 'Некорректный адрес электронной почты' })
    .min(7, { message: 'Email должен содержать не менее 7 символов' })
    .max(30)
    .trim(),
  password: z
    .string()
    .min(6, { message: 'Пароль должен содержать не менее 6 символов' })
    .max(30)
    .trim(),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
