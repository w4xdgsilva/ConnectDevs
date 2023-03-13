import { useContext } from 'react';
import { PostCard } from './PostCard';
import { StyledPostList } from './StyledPostList';
import { PostsContext } from '../../providers/PostsContext/PostsContext';
import { StyledContainer } from '../../styles/grid';

export const PostsList = () => {
  const { posts } = useContext(PostsContext);

  return (
    <StyledContainer containerWidth={1250}>
      {posts.length > 0 ? (
        <StyledPostList>
          {posts.map((post) =>
            post.username ? <PostCard key={post.id} card={post} /> : null
          )}
        </StyledPostList>
      ) : (
        <p>Sem posts...</p>
      )}
    </StyledContainer>
  );
};
