import * as z from 'zod';

import { isURL } from '@/shared/lib/is-url';

export const updateSchema = z.object({
  email: z
    .string()
    .email()
    .min(7, { message: 'Email must contain at least 7 character(s)' })
    .max(20)
    .trim(),
  userName: z
    .string()
    .min(4, { message: 'Name must contain at least 5 character(s)' })
    .max(30)
    .trim(),
  imageUrl: z
    .string()
    .trim()
    .refine((value) => isURL(value) || value.length === 0, {
      message: 'Invalid URL',
    }),
  description: z.string().trim(),
});

export type UpdateSchemaType = z.infer<typeof updateSchema>;
