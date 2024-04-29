import { clsx } from 'clsx/lite';

interface AvatarProps {
  className?: string;
  isLoading?: boolean;
  size?: 'sm' | 'md' | 'lg';
  userImg: string | null;
  userName: string | null;
}

export const Avatar = ({
  userImg,
  size = 'sm',
  userName,
  className,
  isLoading,
}: AvatarProps) => {
  const sizeAvatar =
    size === 'sm' ? 'w-[50px] h-[50px]' : size === 'md' ? 'w-24 h-24' : '';

  const sizeText = size === 'sm' ? 'text-lg' : size === 'md' ? 'text-4xl' : 'text-lg';

  return (
    <div
      className={clsx(
        sizeAvatar,
        className,
        isLoading && 'bg-zinc-200',
        'flex rounded-full border border-neutral-200 bg-zinc-100  shadow-md'
      )}
    >
      {userImg ? (
        <img
          className='h-full w-full rounded-full object-cover'
          style={{ color: 'rgb(155, 161, 39)' }}
          src={userImg}
          alt='avatar'
        />
      ) : (
        <div className={[sizeText, 'm-auto'].join(' ')}>
          {userName?.[0].toUpperCase()}
        </div>
      )}
    </div>
  );
};
