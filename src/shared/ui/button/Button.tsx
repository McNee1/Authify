import { ComponentProps } from 'react';
import clsx from 'clsx/lite';

type ButtonProps = ComponentProps<'button'> & {
  variant?: 'dark' | 'light';
};

const commonStyles = 'text-base font-medium rounded-md duration-100 ease-in';

export const Button = ({ className, children, variant, ...rest }: ButtonProps) => {
  const light =
    'text-black bg-white border border-neutral-300 hover:bg-zinc-200 disabled:bg-neutral-100';
  const dark =
    'text-white bg-[#050708] hover:bg-[#050708]/90 disabled:border-neutral-300 disabled:bg-neutral-300';

  const variantClass = variant === 'dark' ? dark : variant === 'light' ? light : '';

  return (
    <button
      className={clsx(commonStyles, variantClass, className)}
      {...rest}
    >
      {children}
    </button>
  );
};
