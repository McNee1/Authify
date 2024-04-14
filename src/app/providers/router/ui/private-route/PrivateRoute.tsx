import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { useAppSelector } from '@/app/providers/store-provider';
import { selectIsAuth } from '@/features/session';

interface PrivateRoute {
  children: ReactNode;
  redirect: string;
}

export const PrivateRoute = ({ redirect, children }: PrivateRoute) => {
  const isAuth = useAppSelector(selectIsAuth);

  return isAuth ? children : <Navigate to={redirect} />;
};
