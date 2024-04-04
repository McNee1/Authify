import { ComponentPropsWithRef, forwardRef, ReactNode } from 'react';
import { FieldError } from 'react-hook-form';

interface CustomInputProps extends ComponentPropsWithRef<'input'> {
  errors?: FieldError;
  gap?: string;
  icon?: ReactNode;
}

export const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  function CustomInput(props, ref) {
    const { gap, icon, errors, className, ...rest } = props;
    return (
      <>
        <div className={['relative', errors ? '' : gap].join(' ')}>
          {icon && (
            <div className='absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none'>
              {icon}
            </div>
          )}
          <input
            ref={ref}
            {...rest}
            className={[
              'p-3 border placeholder:text-zinc-500 text-black text-base rounded-md w-full focus:outline-none ',
              icon && 'pl-14',
              className,
            ].join(' ')}
          />
        </div>
        {errors && (
          <div className='text-red-600 text-sm font-medium mb-0.5'>{errors.message}</div>
        )}
      </>
    );
  }
);
