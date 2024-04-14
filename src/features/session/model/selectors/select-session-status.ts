import { RootState } from '@/app/providers/store-provider';

export const selectSessionStatus = (state: RootState) => state.session.status;
