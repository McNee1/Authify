import * as z from 'zod';

export const createSchema = z.object({
  userName: z
    .string()
    .min(4, { message: 'Name must contain at least 5 character(s)' })
    .max(20)
    .trim(),
  email: z
    .string()
    .email()
    .min(7, { message: 'Email must contain at least 7 character(s)' })
    .max(20)
    .trim(),
  password: z
    .string()
    .min(5, { message: 'Password must contain at least 5 character(s)' })
    .max(30)
    .trim(),
});

export type CreateSchemaType = z.infer<typeof createSchema>;
