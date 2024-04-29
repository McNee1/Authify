import SVG from 'react-inlinesvg';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { PATH_ROUTER } from '@/app/providers/router';
import { useAppSelector } from '@/app/providers/store-provider';
import { selectUserImg, selectUserName } from '@/entities/user';
import { selectIsAuth } from '@/features/session';
import { Avatar } from '@/shared/ui/avatar/Avatar';
import { Button } from '@/shared/ui/button/Button';

export const Header = () => {
  const userImg = useAppSelector(selectUserImg);
  const userName = useAppSelector(selectUserName);
  const isAuth = useAppSelector(selectIsAuth);

  const location = useLocation();
  const navigate = useNavigate();

  const handleEnter = () => {
    console.log(location);
    if (location.pathname.slice(1) !== PATH_ROUTER.LOGIN) {
      navigate(PATH_ROUTER.LOGIN);
    } else {
      navigate(PATH_ROUTER.REGISTRATION);
    }
  };

  return (
    <header className='border-b  border-neutral-200 bg-white'>
      <div className='container max-w-7xl '>
        <div className='flex items-center justify-between py-3'>
          <div className='flex items-center'>
            <div className='mr-[20px]'>
              <Link to={PATH_ROUTER.USERS}>
                <SVG src='/src/shared/assets/icons/logo.svg' />
              </Link>
            </div>
            <span className='hidden w-[225px] sm:block'>
              Lorem ipsum dolor sit amet consectetur.
            </span>
          </div>

          {isAuth ? (
            <>
              <div className='ml-auto mr-5'>{userName}</div>
              <Link to={PATH_ROUTER.PROFILE}>
                <Avatar
                  userName={userName}
                  userImg={userImg}
                  size='sm'
                />
              </Link>
            </>
          ) : (
            <Button
              className='rounded-md border border-solid border-neutral-300 px-8 py-[7px] font-medium'
              onClick={handleEnter}
            >
              {location.pathname.slice(1) !== PATH_ROUTER.LOGIN ? 'Войти' : 'Создать'}
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};
