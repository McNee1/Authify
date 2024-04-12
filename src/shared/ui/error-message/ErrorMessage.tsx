interface ErrorMessageProps {
  error: string;
}

export const ErrorMessage = ({ error }: ErrorMessageProps) => {
  if (!error) {
    return null;
  }
  return <div className='w-full text-center text-red-500'>{error}</div>;
};
