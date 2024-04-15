interface ErrorMessageProps {
  error: string | null;
  onClick?: () => void;
}

export const ErrorMessage = ({ error, onClick }: ErrorMessageProps) => {
  if (!error) {
    return null;
  }
  return (
    <div
      className='mt-2 flex items-start rounded-lg bg-red-100 p-4 text-red-800 dark:bg-gray-800 dark:text-red-400'
      id='alert-2'
      role='alert'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-4 w-4 flex-shrink-0'
        fill='currentColor'
        viewBox='0 0 20 20'
        aria-hidden='true'
      >
        <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z' />
      </svg>
      <span className='sr-only'>Info</span>
      <div className='ms-3 text-sm font-medium'>{error}</div>
      {onClick && (
        <button
          className='-mx-1.5 -my-1.5 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-red-100 p-1.5 text-red-500 hover:bg-red-200 focus:ring-2 focus:ring-red-400 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700'
          data-dismiss-target='#alert-2'
          aria-label='Close'
          onClick={onClick}
          type='button'
        >
          <span className='sr-only'>Close</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-3 w-3'
            viewBox='0 0 14 14'
            aria-hidden='true'
            fill='none'
          >
            <path
              d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
              strokeLinejoin='round'
              strokeLinecap='round'
              stroke='currentColor'
              strokeWidth='2'
            />
          </svg>
        </button>
      )}
    </div>
  );
};
