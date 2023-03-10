import { useContext } from 'react';
import { PostCard } from './PostCard';
import { PostsContext } from '../../providers/PostsContext/PostsContext';

export const PostsList = () => {
  const { posts } = useContext(PostsContext);

  return posts.length > 0 ? (
    <ul>
      {posts.map((post) =>
        post.username ? <PostCard key={post.id} card={post} /> : null
      )}
    </ul>
  ) : (
    <p>Sem posts...</p>
  );
};
