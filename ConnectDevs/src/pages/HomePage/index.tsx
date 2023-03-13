import React from 'react';
import { Header } from '../../components/Header';
import { PostsList } from '../../components/PostList/index';
import { CreatePostForm } from '../../components/Forms/CreatePost';
import { PostsProvider } from '../../providers/PostsContext/PostsContext';
import { AsideProfileLinks } from '../../components/AsideProfileLinks';

export const HomePage = () => (
  <PostsProvider>
    <Header />
    <main className='user__main'>
      <div>
        <CreatePostForm />
        <AsideProfileLinks />
      </div>
      <PostsList />
    </main>
  </PostsProvider>
);
