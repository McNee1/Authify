import { RootState } from '@/app/providers/store-provider';

export const selectUserId = (state: RootState) => state.session.sessionData?.uId ?? null;
