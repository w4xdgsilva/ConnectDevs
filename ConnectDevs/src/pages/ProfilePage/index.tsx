import React, { useContext } from 'react';
import { Form } from '../../components/Forms/UploadLink/index';
import { AddModal } from '../../components/AddModal';
import { Header } from '../../components/Header';
import { LinksList } from '../../components/LinksList';
import { UserPostsList } from '../../components/UserPostsList';
import { UserProfileHeader } from '../../components/UserProfileHeader';
import { ProfileContext } from '../../providers/ProfileContext/ProfileContext';

export const ProfilePage = () => {
  const { modalAdd } = useContext(ProfileContext);

  return (
    <>
      <Header />
      <UserProfileHeader />
      <UserPostsList />
      <LinksList />
      {modalAdd ? <AddModal /> : null}
    </>
  );
};
