import React, { useContext } from 'react';
import { AddModal } from '../../components/AddModal';

import { Header } from '../../components/Header';
import { LinksList } from '../../components/LinksList';
import { UserPostsList } from '../../components/UserPostsList';
import {
  ProfileContext,
  ProfileProvider,
} from '../../providers/ProfileContext/ProfileContext';

export const ProfilePage = () => {
  const { modalAdd } = useContext(ProfileContext);
  return (
    <ProfileProvider>
      {modalAdd && <AddModal />}
      <Header />
      <UserPostsList />
      <LinksList />
    </ProfileProvider>
  );
};
