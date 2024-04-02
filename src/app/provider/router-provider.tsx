import { createBrowserRouter } from 'react-router-dom';

import { LoginPage } from '@/pages/login-page';
import { RegistrationPage } from '@/pages/registration-page';
import { AuthLayout } from '@/widgets/layouts/AuthLayout';

export const useRouter = () => {
  const router = createBrowserRouter([
    {
      element: <AuthLayout />,

      children: [
        {
          path: 'login',
          element: <LoginPage />,
        },
        {
          path: 'registration',
          element: <RegistrationPage />,
        },
      ],
    },
  ]);

  return router;
};
