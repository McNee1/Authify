import { createBrowserRouter } from 'react-router-dom';
import { PATH_ROUTER } from '../../lib/path';
import { PrivateRoute } from '../private-route/PrivateRoute';

import { LoginPage } from '@/pages/login-page';
import { ProfilePage } from '@/pages/profile-page';
import { RegistrationPage } from '@/pages/registration-page';
import { UsersPage } from '@/pages/users-page';
import { AuthLayout } from '@/widgets/layouts/auth-layout';
import { MainLayout } from '@/widgets/layouts/main-layout';

export const useRouter = () => {
  const router = createBrowserRouter([
    {
      element: <AuthLayout />,

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
        <PrivateRoute redirect='login'>
          <MainLayout />
        </PrivateRoute>
      ),
      children: [
        {
          path: '/',
          element: <UsersPage />,
        },
        {
          path: PATH_ROUTER.PROFILE,
          element: <ProfilePage />,
        },
      ],
    },
  ]);

  return router;
};
