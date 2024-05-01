import SVG from 'react-inlinesvg';

import pencilIcon from '/src/shared/assets/icons/pencil.svg';
import { Button } from '@/shared/ui/button/Button';

export const OpenModalBtn = ({ onOpenModal }: { onOpenModal: () => void }) => {
  return (
    <Button
      className='flex flex-row items-center px-[21px] py-1.5'
      onClick={onOpenModal}
      variant='light'
    >
      <SVG
        className='mr-2.5'
        src={pencilIcon}
      />
      <span className='font-medium'>Редактировать</span>
    </Button>
  );
};
