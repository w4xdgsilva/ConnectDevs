import React from 'react';
import { Header } from '../../components/Header';
import { PostsProvider } from '../../providers/PostsContext/PostsContext';
import { PostsList } from '../../components/PostList/index';
import { CreatePostForm } from '../../components/Forms/CreatePost';
import { LinksList } from '../../components/LinksList';
import { ProfileProvider } from '../../providers/ProfileContext/ProfileContext';

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
