import { Link, useLocation } from 'react-router-dom';

import { PATH_ROUTER } from '@/app/providers/router';

const MAP: Record<string, string> = {
  REGISTRATION: 'Уже есть аккаунт? Войти',
  LOGIN: 'Еще нет аккаунта? Зарегистрироваться',
};

export const Footer = () => {
  const location = useLocation();
  const locationPath = location.pathname.slice(1);

  const [title, action] = MAP[locationPath.toUpperCase()].split('?');

  const invertedPath =
    locationPath === PATH_ROUTER.LOGIN ? PATH_ROUTER.REGISTRATION : PATH_ROUTER.LOGIN;

  return (
    <footer>
      <div className='flex py-5'>
        <div className='m-auto py-1'>
          <span className='text-zinc-500'>{title}?</span>{' '}
          <Link
            className='font-medium'
            to={invertedPath}
          >
            {action}
          </Link>
        </div>
      </div>
    </footer>
  );
};
