import { AuthSchema } from '@/entities/auth';
import { UserSchema } from '@/entities/user';

export interface StateSchema {
  auth: AuthSchema;
  user: UserSchema;
}
