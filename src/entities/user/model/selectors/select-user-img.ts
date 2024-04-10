import { RootState } from '@/app/providers/store-provider';

export const selectUserImg = (state: RootState) => state.user.userData?.photoURL ?? null;
