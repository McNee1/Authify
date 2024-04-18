export const ProfileHeroImage = ({ image }: { image: string | null }) => {
  return (
    <>
      {image ? (
        <img
          className='h-full w-full object-cover'
          alt='background'
          src={image}
        />
      ) : (
        <div className='h-full border-b border-neutral-200 bg-zinc-100'></div>
      )}
    </>
  );
};
