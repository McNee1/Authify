import * as z from 'zod';

export const createSchema = z.object({
  userName: z
    .string()
    .min(4, { message: 'Имя должно содержать не менее 4 символов' })
    .max(20)
    .trim(),
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

export type CreateSchemaType = z.infer<typeof createSchema>;
