export const FallbackError = ({ error }: { error: Error }) => {
  return (
    <div
      className='container text-center'
      id='error-page'
    >
      <h1 className='text-2xl'>Oops!</h1>
      <h4 className='text-lg'>
        Sorry, an unexpected error has occurred: &nbsp;
        <br />
        <span className='text-red-600'>{error.message}</span>
      </h4>
    </div>
  );
};
