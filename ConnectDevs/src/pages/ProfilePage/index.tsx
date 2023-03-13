<<<<<<< HEAD
import React, { useContext } from 'react';
import { EditPost } from '../../components/AddModal/EditPost';
import { Form } from '../../components/Forms/UploadLink/index';
=======
import React from 'react';
import { EditPost } from '../../components/Forms/EditPost';
import { Form } from '../../components/Forms/UploadLink/index';

>>>>>>> af3bac7700eeb9295c0a31ecfbbd20d4c5fea9a2
import { Header } from '../../components/Header';
import { LinksList } from '../../components/LinksList';
import { UserPostsList } from '../../components/UserPostsList';
import {
  ProfileContext,
  ProfileProvider,
} from '../../providers/ProfileContext/ProfileContext';

<<<<<<< HEAD
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
=======
export const ProfilePage = () => (
  <ProfileProvider>
    <Header />
    <EditPost />
    <Form />
    <UserPostsList />
    <LinksList />
  </ProfileProvider>
);
>>>>>>> af3bac7700eeb9295c0a31ecfbbd20d4c5fea9a2
