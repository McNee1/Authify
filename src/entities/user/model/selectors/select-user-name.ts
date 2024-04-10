import { RootState } from '@/app/providers/store-provider';

export const selectUserName = (state: RootState) => state.user.userData?.name ?? null;
