import { ComponentProps, forwardRef } from 'react';

interface TextAreaProps extends ComponentProps<'textarea'> {
  label?: string;
  labelClassName?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextArea(props, ref) {
    const { className, label, id, labelClassName, ...rest } = props;
    return (
      <>
        {label && (
          <label
            className={labelClassName}
            htmlFor={id}
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          {...rest}
          className={className}
          id={id}
        />
      </>
    );
  }
);
