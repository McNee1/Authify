import { User } from '@/entities/user/model/types/user.type';

export interface UsersListSchema {
  error: string | null;
  usersList: User[] | null;
}
