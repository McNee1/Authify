import { ComponentProps } from 'react';

type ButtonProps = ComponentProps<'button'>;

export const Button = ({ className, children, ...rest }: ButtonProps) => {
  return (
    <button
      className={className}
      {...rest}
    >
      {children}
    </button>
  );
};
