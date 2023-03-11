import React from 'react';
import { UserPostsList } from '../../components/UserPostsList';
import { PostsProvider } from '../../providers/PostsContext/PostsContext';

export const ProfilePage = () => (
  <div>
    <PostsProvider>
      <UserPostsList />
    </PostsProvider>
  </div>
);
