import React from 'react';
import { UserPostsList } from '../../components/UserPostsList';
import { PostsProvider } from '../../providers/PostsContext/PostsContext';
import { Form } from '../../components/Forms/UploadLink/index';
import { LinksList } from '../../components/LinksList';
import { ProfileProvider } from '../../providers/ProfileContext/ProfileContext';

export const ProfilePage = () => (
  <div>
    <ProfileProvider>
      <Form />
      <LinksList />
    </ProfileProvider>
  </div>
);
