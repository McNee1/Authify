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
            <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5'>
              {icon}
            </div>
          )}
          <input
            ref={ref}
            {...rest}
            className={[
              'w-full rounded-md border p-3 text-base text-black placeholder:text-zinc-500 focus:outline-none ',
              icon && 'pl-14',
              className,
            ].join(' ')}
          />
        </div>
        {errors && (
          <div className='mb-0.5 text-sm font-medium text-red-600'>{errors.message}</div>
        )}
      </>
    );
  }
);
