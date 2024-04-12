import { useAppSelector } from '@/app/providers/store-provider';
import { selectUserImg, selectUserName } from '@/entities/user';
import { Avatar } from '@/shared/ui/avatar/Avatar';
import { Button } from '@/shared/ui/button/Button';

export const ProfilePage = () => {
  const userName = useAppSelector(selectUserName);
  const userImg = useAppSelector(selectUserImg);
  return (
    <>
      <div className='relative h-48'>
        <img
          src={'/src/shared/assets/placeholder.jpg'}
          className='h-full w-full object-cover'
          alt='background'
        />

        <div className='duration-100" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[5px] border border-neutral-300 bg-white ease-in hover:bg-zinc-200'>
          <label className='flex cursor-pointer  gap-2 px-5 py-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 25 26'
              height='26'
              fill='none'
              width='25'
            >
              <path
                d='M12.5 3.30762L11.9385 3.84473L6.46973 9.31348L7.59277 10.4365L11.7188 6.31055V19.25H13.2812V6.31055L17.4072 10.4365L18.5303 9.31348L13.0615 3.84473L12.5 3.30762ZM5.46875 20.8125V22.375H19.5312V20.8125H5.46875Z'
                fill='black'
              />
            </svg>
            <span className='text-base font-medium text-black'>Загрузить</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 26 26'
              height='26'
              fill='none'
              width='26'
            >
              <path
                d='M2.0625 4.40625V21.5938H23.9375V4.40625H2.0625ZM3.625 5.96875H22.375V16.833L18.249 12.6826L17.6875 12.1211L14.1475 15.6611L9.65527 11.1201L9.09375 10.5586L3.625 16.0273V5.96875ZM19.25 7.53125C18.3864 7.53125 17.6875 8.2301 17.6875 9.09375C17.6875 9.9574 18.3864 10.6562 19.25 10.6562C20.1136 10.6562 20.8125 9.9574 20.8125 9.09375C20.8125 8.2301 20.1136 7.53125 19.25 7.53125ZM9.09375 12.7803L16.2715 20.0312H3.625V18.249L9.09375 12.7803ZM17.6875 14.3428L22.375 19.0303V20.0312H18.4932L15.2461 16.7598L17.6875 14.3428Z'
                fill='black'
              />
            </svg>

            <input
              className='hidden'
              type='file'
            />
          </label>
        </div>
      </div>

      <div className='container'>
        <div className='cart m-auto mt-20 max-w-[800px]'>
          <Avatar
            className='absolute top-[13.5rem]'
            userName={userName}
            userImg={userImg}
            size='md'
          />

          <div className='mb-7 flex flex-col items-start justify-between sm:flex-row'>
            <div className='mb-[10px]'>
              <div className='mb-2 text-3xl font-medium'>Donald</div>
              <div className='text-zinc-500'>dsd@sdsd.sds</div>
            </div>
            <Button className='flex flex-row items-center rounded-md border border-neutral-300 px-[21px] py-1.5 duration-100 ease-in hover:bg-zinc-200'>
              <>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 25 26'
                  className='mr-2.5'
                  height='26'
                  fill='none'
                  width='25'
                >
                  <path
                    d='M18.6768 3.60059C17.8589 3.60059 17.041 3.91797 16.4062 4.55273L4.05273 16.9062L4.00391 17.1504L3.14941 21.4473L2.90527 22.5947L4.05273 22.3506L8.34961 21.4961L8.59375 21.4473L20.9473 9.09375C22.2168 7.82422 22.2168 5.82227 20.9473 4.55273C20.3125 3.91797 19.4946 3.60059 18.6768 3.60059ZM18.6768 5.08984C19.0704 5.08984 19.4672 5.2699 19.8486 5.65137C20.6085 6.41125 20.6085 7.23523 19.8486 7.99512L19.2871 8.53223L16.9678 6.21289L17.5049 5.65137C17.8864 5.2699 18.2831 5.08984 18.6768 5.08984ZM15.8691 7.31152L18.1885 9.63086L8.74023 19.0791C8.22754 18.0781 7.42188 17.2725 6.4209 16.7598L15.8691 7.31152ZM5.41992 18.0293C6.35681 18.4077 7.09229 19.1432 7.4707 20.0801L4.90723 20.5928L5.41992 18.0293Z'
                    fill='black'
                  />
                </svg>
                <span className='font-medium'>Редактировать</span>
              </>
            </Button>
          </div>

          <div className='mb-14'>
            Родился в районе Квинс в Нью-Йорке, в семье предпринимателя-миллионера,
            инвестора и застройщика Фреда Трампа. По отцовской линии Трамп имеет немецкие
            корни, по материнской — шотландские. Мать Мэри была домохозяйкой.
          </div>

          <Button className='mb-4 flex flex-row items-center rounded-md border border-neutral-300 px-[21px] py-1.5 duration-100 ease-in hover:bg-zinc-200'>
            <>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 25 26'
                className='mr-2.5'
                height='26'
                fill='none'
                width='25'
              >
                <path
                  d='M12.5 3.625C7.33032 3.625 3.125 7.83032 3.125 13C3.125 18.1697 7.33032 22.375 12.5 22.375C15.6647 22.375 18.4692 20.8033 20.166 18.3955L18.8965 17.4922C17.4835 19.5002 15.1489 20.8125 12.5 20.8125C8.17566 20.8125 4.6875 17.3243 4.6875 13C4.6875 8.67566 8.17566 5.1875 12.5 5.1875C15.1489 5.1875 17.4805 6.49976 18.8965 8.50781L20.166 7.60449C18.4692 5.19666 15.6647 3.625 12.5 3.625ZM18.2373 9.31348L17.1143 10.4365L18.8965 12.2188H9.375V13.7812H18.8965L17.1143 15.5635L18.2373 16.6865L21.3623 13.5615L21.8994 13L21.3623 12.4385L18.2373 9.31348Z'
                  fill='black'
                />
              </svg>
              <span className='font-medium'>Выйти</span>
            </>
          </Button>
        </div>
      </div>
    </>
  );
};
