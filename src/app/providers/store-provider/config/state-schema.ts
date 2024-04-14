import { UserSchema } from '@/entities/user';
import { UsersListSchema } from '@/entities/users-list';
import { SessionSchema } from '@/features/session';

export interface StateSchema {
  session: SessionSchema;
  user: UserSchema;
  users: UsersListSchema;
}
