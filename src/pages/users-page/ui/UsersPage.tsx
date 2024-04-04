export const UsersPage = () => {
  return (
    <>
      <div className='container'>
        <div className='m-auto max-w-[800px]'>
          <h1 className='mb-7 mt-12 text-3xl font-medium text-black'>Список аккаунтов</h1>
          {Array.from({ length: 5 }).map((_, id) => (
            <a
              href='/'
              key={id}
            >
              <div className='flex items-center border-t py-2.5 last-of-type:border-b'>
                <img
                  src='https://img.freepik.com/premium-vector/young-man-avatar-cartoon-character-profile-picture_18591-55055.jpg?w=2000'
                  className='h-[50px]  w-[50px] rounded-full object-cover'
                  alt='avatar'
                />
                <div className='ml-5 flex flex-col sm:grow sm:flex-row'>
                  <div className='font-medium text-black'>Jimy</div>
                  <div className='ml-auto font-normal text-zinc-500'>jimy@test.com</div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
