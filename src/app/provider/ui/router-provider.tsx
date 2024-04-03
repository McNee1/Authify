import { createBrowserRouter } from 'react-router-dom';
import { PATH_ROUTER } from '../lib/path';

import { LoginPage } from '@/pages/login-page';
import { RegistrationPage } from '@/pages/registration-page';
import { AuthLayout } from '@/widgets/layouts/AuthLayout';

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
  ]);

  return router;
};
