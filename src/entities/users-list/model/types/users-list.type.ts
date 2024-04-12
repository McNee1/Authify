import { User } from '@/entities/user/model/types/user.type';

export interface UsersListSchema {
  error: string | null;
  status: 'failed' | 'idle' | 'pending' | 'succeeded';
  usersList: User[] | null;
}
