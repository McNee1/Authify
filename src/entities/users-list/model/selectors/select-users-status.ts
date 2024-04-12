import type { RootState } from '@/app/providers/store-provider';

export const selectUsersStatus = (state: RootState) => state.users.status;
