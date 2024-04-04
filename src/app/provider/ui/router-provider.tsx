import { createBrowserRouter } from 'react-router-dom';
import { PATH_ROUTER } from '../lib/path';

import { LoginPage } from '@/pages/login-page';
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
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <UsersPage />,
        },
      ],
    },
  ]);

  return router;
};
