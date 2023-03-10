import React from 'react';
import { Header } from '../../components/Header';
import { PostsProvider } from '../../providers/PostsContext/PostsContext';
import { PostsList } from '../../components/PostList/index';
import { CreatePostForm } from '../../components/Forms/CreatePost';

export const HomePage = () => (
  <PostsProvider>
    <Header />
    <CreatePostForm />
    <PostsList />
  </PostsProvider>
);
