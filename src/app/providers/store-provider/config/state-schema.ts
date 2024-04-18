import { UserSchema } from '@/entities/user';
import { SessionSchema } from '@/features/session';

export interface StateSchema {
  session: SessionSchema;
  user: UserSchema;
}
