import type { RootState } from '@/app/providers/store-provider';

export const selectUsersError = (state: RootState) => state.users.error;
