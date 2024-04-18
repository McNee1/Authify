import { User } from '@/entities/user';

export interface UsersListSchema extends User {
  uId: string;
}
