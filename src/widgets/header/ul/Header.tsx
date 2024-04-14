import { useLocation, useNavigate } from 'react-router-dom';

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
    <header className='bg-white'>
      <div className='container max-w-7xl border-b border-neutral-200'>
        <div className='flex items-center justify-between py-3'>
          <div className='flex items-center'>
            <div className='mr-[20px]'>
              <a href='/'>
                <svg
                  enableBackground='new 0 0 715.412 283.951'
                  viewBox='0 0 715.412 283.951'
                  xmlSpace='preserve'
                  overflow='visible'
                  height='50'
                  width='80'
                >
                  <g>
                    <g>
                      <path
                        d='M620.923,0c-52.181,0-94.487,42.303-94.487,94.492c0,52.181,42.307,94.479,94.487,94.479    c52.186,0,94.492-42.299,94.488-94.479C715.412,42.307,673.105,0,620.923,0z M620.923,144.441    c-27.589,0-49.953-22.368-49.953-49.958c-0.004-27.589,22.364-49.954,49.953-49.954c27.59,0,49.958,22.368,49.958,49.958    S648.513,144.441,620.923,144.441z'
                        fill='#227B82'
                      />
                    </g>
                  </g>
                  <path
                    d='M240.782,143.475c0,66.491-53.9,120.389-120.392,120.389c-66.488,0-120.385-53.897-120.385-120.389  c0-66.484,53.897-120.381,120.385-120.381C186.882,23.093,240.782,76.991,240.782,143.475z'
                    fill='#227B82'
                  />
                  <g>
                    <path
                      d='M125.366,180.645l0.133,0.781c1.225,7.228,6.907,10.991,15.64,10.27l10.273-1.302l83.677-10.2   c5.108-16.092,6.978-33.536,4.788-51.368C231.8,62.975,171.959,16.067,106.185,23.947l17.819,145.787L125.366,180.645z'
                      fill='#EFB31D'
                    />
                    <path
                      d='M133.448,249.658c-40.131,1.623-58.809-14.983-63.984-56.928L51.312,44.877   c-35.212,24.685-56.023,67.6-50.4,113.286c8.072,65.96,68.176,112.88,134.142,104.807c19.459-2.386,37.287-9.291,52.478-19.564   l-44.521,5.479C140.098,249.211,136.802,249.658,133.448,249.658'
                      fill='#BFD042'
                    />
                  </g>
                  <g>
                    <g>
                      <path
                        d='M577.284,221.444l-0.496-2.337l-13.921-108.091c-1.44-50.926-43.171-91.767-94.446-91.767    c-52.181,0-94.488,42.303-94.488,94.488c0,52.186,42.308,94.484,94.488,94.484c21.355,0,41.053-7.087,56.877-19.032l-0.002,0.004    l2.961,23.972l1.076,8.924l0.068,0.612c0.436,5.967-3.283,10.076-10.398,11.2l-8.299,1.056l-68.14,8.376    c11.583,18.75,29.329,33.068,49.989,40.618l43.975-5.705C568.597,271.599,583.657,256.757,577.284,221.444z M468.36,163.175    c-27.593,0-49.957-22.368-49.957-49.957s22.368-49.953,49.957-49.953c27.59-0.004,49.958,22.364,49.954,49.953    C518.314,140.807,495.95,163.175,468.36,163.175z'
                        fill='#227B82'
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d='M315.477,38.942c-52.184,0-94.488,42.307-94.488,94.492c0,52.182,42.304,94.484,94.488,94.488    c52.183-0.004,94.49-42.307,94.49-94.488C409.966,81.249,367.66,38.942,315.477,38.942z M314.995,182.006    c-27.589,0-49.956-22.368-49.956-49.957c0-27.59,22.368-49.954,49.956-49.954c27.589,0,49.954,22.364,49.954,49.954    C364.949,159.638,342.584,182.006,314.995,182.006z'
                        fill='#227B82'
                      />
                    </g>
                  </g>
                </svg>
              </a>
            </div>
            <span className='hidden w-[225px] sm:block'>
              Lorem ipsum dolor sit amet consectetur.
            </span>
          </div>

          {isAuth ? (
            <>
              <div className='ml-auto mr-5'>{userName}</div>
              <a href='/'>
                <Avatar
                  userName={userName}
                  userImg={userImg}
                  size='sm'
                />
              </a>
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
