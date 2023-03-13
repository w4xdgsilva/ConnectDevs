<<<<<<< HEAD
import React from 'react';
import { EditPost } from '../../components/Forms/EditPost';
=======
>>>>>>> 16a5dded5db8736b4ad529defce7a1ac45539cfb

import { Form } from '../../components/Forms/UploadLink/index';
import { Header } from '../../components/Header';
import { LinksList } from '../../components/LinksList';
import { UserPostsList } from '../../components/UserPostsList';
import { ProfileProvider } from '../../providers/ProfileContext/ProfileContext';

export const ProfilePage = () => (
  <ProfileProvider>
    <EditPost />
    <Header />
    <Form />
    <UserPostsList />
    <LinksList />
  </ProfileProvider>
);
