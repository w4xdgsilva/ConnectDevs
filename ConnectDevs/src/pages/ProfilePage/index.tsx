import React from 'react';
import { EditPost } from '../../components/Forms/EditPost';
import { Form } from '../../components/Forms/UploadLink/index';
import { Header } from '../../components/Header';
import { LinksList } from '../../components/LinksList';
import { UserPostsList } from '../../components/UserPostsList';
import { ProfileProvider } from '../../providers/ProfileContext/ProfileContext';

export const ProfilePage = () => (
  <ProfileProvider>
    <Header />
    <EditPost />
    <Form />
    <UserPostsList />
    <LinksList />
  </ProfileProvider>
);
