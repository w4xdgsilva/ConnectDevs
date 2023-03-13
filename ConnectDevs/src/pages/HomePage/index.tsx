import React from 'react';
import { Header } from '../../components/Header';
import { PostsList } from '../../components/PostList/index';
import { CreatePostForm } from '../../components/Forms/CreatePost';
import { PostsProvider } from '../../providers/PostsContext/PostsContext';

export const HomePage = () => (
  <PostsProvider>
    <Header />
    <main className='user__main'>
      <CreatePostForm />
      <PostsList />
    </main>
  </PostsProvider>
);
