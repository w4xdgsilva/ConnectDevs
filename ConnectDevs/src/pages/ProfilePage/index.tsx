<<<<<<< HEAD
import React from 'react';
import { EditPost } from '../../components/Forms/EditPost';
import { Form } from '../../components/Forms/UploadLink/index';
=======

import React from 'react';
>>>>>>> 720ea9cfe56fc46138f3c14faca0851bfa556de5
import { Header } from '../../components/Header';
import { LinksList } from '../../components/LinksList';
import { UserPostsList } from '../../components/UserPostsList';
import { ProfileProvider } from '../../providers/ProfileContext/ProfileContext';

export const ProfilePage = () => (
<<<<<<< HEAD
  <ProfileProvider>
    <Header />
    <EditPost />
    <Form />
    <UserPostsList />
    <LinksList />
  </ProfileProvider>
=======
  <div>
    <ProfileProvider>
      <Header/>
      <UserPostsList />
      <LinksList />
    </ProfileProvider>
  </div>
>>>>>>> 720ea9cfe56fc46138f3c14faca0851bfa556de5
);
