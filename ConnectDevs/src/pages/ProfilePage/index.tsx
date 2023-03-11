import React from 'react';
import { Form } from '../../components/Forms/UploadLink/index';
import { ProfileProvider } from '../../providers/ProfileContext/ProfileContext';

export const ProfilePage = () => (
  <div>
    <ProfileProvider>
      <Form />
    </ProfileProvider>
  </div>
);
