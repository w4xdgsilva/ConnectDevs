import React from 'react';
import { Header } from '../../components/Header';
import { PostsList } from '../../components/PostList/index';
import { CreatePostForm } from '../../components/Forms/CreatePost';
import { PostsProvider } from '../../providers/PostsContext/PostsContext';
import { AsideProfileLinks } from '../../components/AsideProfileLinks';
import { StyledContainer } from '../../styles/grid';

export const HomePage = () => (
  <PostsProvider>
    <Header />
    <main className='user__main'>
      <StyledContainer containerWidth={1250}>
        <div className='user__box'>
          <div className='user__cont'>
            <CreatePostForm />
            <PostsList />
          </div>
          <AsideProfileLinks />
        </div>
      </StyledContainer>
    </main>
  </PostsProvider>
);
