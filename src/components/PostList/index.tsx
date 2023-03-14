import { useContext } from 'react';
import { PostCard } from './PostCard';
import { StyledPostList } from './StyledPostList';
import { PostsContext } from '../../providers/PostsContext/PostsContext';

export const PostsList = () => {
  const { posts } = useContext(PostsContext);

  return (
    <div>
      {posts.length > 0 ? (
        <StyledPostList>
          {posts.map((post) =>
            post.username ? <PostCard key={post.id} card={post} /> : null
          )}
        </StyledPostList>
      ) : (
        <p>Sem posts...</p>
      )}
    </div>
  );
};
