import SVG from 'react-inlinesvg';

import { Button } from '@/shared/ui/button/Button';

export const OpenModalBtn = ({ onOpenModal }: { onOpenModal: () => void }) => {
  return (
    <Button
      className='flex flex-row items-center rounded-md border border-neutral-300 px-[21px] py-1.5 duration-100 ease-in hover:bg-zinc-200'
      onClick={onOpenModal}
    >
      <SVG
        src='/src/shared/assets/icons/pencil.svg'
        className='mr-2.5'
      />
      <span className='font-medium'>Редактировать</span>
    </Button>
  );
};
