import { sessionAction } from '../slice/session-slice';

import { useAppDispatch } from '@/app/providers/store-provider';
import { userAction } from '@/entities/user';

export const useLogout = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(userAction.deleteUser());
    dispatch(sessionAction.logout());
  };

  return { handleLogout };
};
