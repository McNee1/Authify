import { createBrowserRouter } from 'react-router-dom';
import { PATH_ROUTER } from '../../lib/path';
import { ErrorBoundaryWrap } from '../error-boundary-wrap/ErrorBoundaryWrap';

import { LoginPage } from '@/pages/login-page';
import { NotFoundPage } from '@/pages/not-found-page/NotFoundPage';
import { ProfilePage } from '@/pages/profile-page';
import { RegistrationPage } from '@/pages/registration-page';
import { UsersPage } from '@/pages/users-page';
import { OWNER } from '@/shared/constant/common';
import { AuthLayout } from '@/widgets/layouts/auth-layout';
import { MainLayout } from '@/widgets/layouts/main-layout';

export const useRouter = () => {
  const router = createBrowserRouter([
    {
      element: (
        <ErrorBoundaryWrap>
          <AuthLayout />
        </ErrorBoundaryWrap>
      ),

      children: [
        {
          path: PATH_ROUTER.LOGIN,
          element: <LoginPage />,
        },
        {
          path: PATH_ROUTER.REGISTRATION,
          element: <RegistrationPage />,
        },
      ],
    },
    {
      element: (
        <ErrorBoundaryWrap isPrivate>
          <MainLayout />
        </ErrorBoundaryWrap>
      ),

      children: [
        {
          path: PATH_ROUTER.USERS,
          element: <UsersPage />,
        },
        {
          path: PATH_ROUTER.PROFILE,
          element: <ProfilePage rule={OWNER} />,
        },
        {
          path: `${PATH_ROUTER.GUEST}/:guestId`,
          element: <ProfilePage rule='guest' />,
        },
      ],
    },
    {
      element: <NotFoundPage />,
      path: '*',
    },
  ]);

  return router;
};
