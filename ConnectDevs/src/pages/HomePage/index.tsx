import React from 'react';
import { Header } from '../../components/Header';
import { PostsList } from '../../components/PostList/index';
import { CreatePostForm } from '../../components/Forms/CreatePost';

export const HomePage = () => (
  <ProfileProvider>
  <PostsProvider>
    <Header />
    <CreatePostForm />
    <PostsList />
    <LinksList/>
  </PostsProvider>
  </ProfileProvider>
);
