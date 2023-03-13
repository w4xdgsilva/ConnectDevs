import React, { useContext } from 'react';
import { EditPost } from '../../components/AddModal/EditPost';
import { Form } from '../../components/Forms/UploadLink/index';
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
      <Header />
      <EditPost />
      <UserPostsList />
      <LinksList />
    </ProfileProvider>
  );
};
