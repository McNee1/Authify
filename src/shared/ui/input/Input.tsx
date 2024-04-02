import { ComponentPropsWithRef, forwardRef, ReactNode } from 'react';

interface CustomInputProps extends ComponentPropsWithRef<'input'> {
  gap?: string;
  icon?: ReactNode;
}

export const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  function CustomInput(props, ref) {
    const { gap, icon } = props;
    return (
      <>
        <div className={['relative', gap].join(' ')}>
          {icon && (
            <div className='absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none'>
              {icon}
            </div>
          )}
          <input
            ref={ref}
            {...props}
            className={[
              'p-3 border border-neutral-300 placeholder:text-zinc-500 text-black text-base rounded-md w-full focus:outline-none focus:border-zinc-500',
              icon && 'pl-14',
            ].join(' ')}
          />
        </div>
      </>
    );
  }
);
