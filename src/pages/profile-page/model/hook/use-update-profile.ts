import { Dispatch, SetStateAction, useState } from 'react';

import { User } from '@/entities/user';

export const useUpdateProfile = (
  setProfileData: Dispatch<SetStateAction<User | null>>
) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };
  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const handleUpdateProfile = (formData: User) => {
    setProfileData(formData);
    handleCloseModal();
  };
  return { handleOpenModal, handleCloseModal, handleUpdateProfile, isOpenModal };
};
