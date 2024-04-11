import { AuthSchema } from '@/entities/auth';
import { UserSchema } from '@/entities/user';
import { UsersListSchema } from '@/entities/users-list';

export interface StateSchema {
  auth: AuthSchema;
  user: UserSchema;
  users: UsersListSchema;
}
