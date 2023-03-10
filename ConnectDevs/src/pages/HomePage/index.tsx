import React from 'react';
import { Header } from '../../components/Header';
import { PostsProvider } from '../../providers/PostsContext/PostsContext';
import { PostsList } from '../../components/PostList/index';

export const HomePage = () => (
  <PostsProvider>
    <Header />
    <PostsList />
  </PostsProvider>
);
