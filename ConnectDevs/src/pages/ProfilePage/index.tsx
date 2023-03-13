import React from 'react';
import { Header } from '../../components/Header';

import { LinksList } from '../../components/LinksList';
import { UserPostsList } from '../../components/UserPostsList';
import { ProfileProvider } from '../../providers/ProfileContext/ProfileContext';

export const ProfilePage = () => (
  <div>
    <ProfileProvider>
      <Header/>
      <UserPostsList />
      <LinksList />
    </ProfileProvider>
  </div>
);
