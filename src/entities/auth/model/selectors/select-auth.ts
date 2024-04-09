import { RootState } from '@/app/providers/store-provider';

export const selectAuth = (state: RootState) => state.auth.authData;
