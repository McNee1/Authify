import { RootState } from '@/app/providers/store-provider';

export const selectUserData = (state: RootState) => state.user.userData;
