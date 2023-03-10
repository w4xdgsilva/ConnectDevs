import React from 'react';
import { Index } from '../../components/Forms/UploadLink/index';
import { ProfileProvider } from '../../providers/ProfileContext/ProfileContext';

export const ProfilePage = () => (
  <div>
    <ProfileProvider>
      <Index />
    </ProfileProvider>
  </div>
);
