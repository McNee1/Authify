export const ProfileHeroImage = ({ image }: { image: string | null }) => {
  return (
    <>
      {image ? (
        <img
          className='h-full w-full object-cover shadow-sm'
          alt='background'
          src={image}
        />
      ) : (
        <div className='h-full bg-zinc-100 shadow-md'></div>
      )}
    </>
  );
};
