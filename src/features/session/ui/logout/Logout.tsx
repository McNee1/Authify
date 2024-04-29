import SVG from 'react-inlinesvg';
import { useLogout } from '../../model/hooks/useLogout';

import { Button } from '@/shared/ui/button/Button';

export const Logout = () => {
  const { handleLogout } = useLogout();
  return (
    <Button
      className='mb-4 flex flex-row items-center rounded-md border border-neutral-300 px-[21px] py-1.5 duration-100 ease-in hover:bg-zinc-200'
      onClick={handleLogout}
    >
      <SVG
        src='/src/shared/assets/icons/exit.svg'
        className='mr-2.5'
      />
      <span className='font-medium'>Выйти</span>
    </Button>
  );
};
