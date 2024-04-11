import { RootState } from '@/app/providers/store-provider';

export const selectUsersList = (state: RootState) => state.users.usersList;
