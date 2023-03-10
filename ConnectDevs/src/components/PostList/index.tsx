import { useContext } from 'react';
import { PostCard } from './PostCard';
import { PostsContext } from '../../providers/PostsContext/PostsContext';

export const PostsList = () => {
  const { posts } = useContext(PostsContext);

  return posts.length > 0 ? (
    <ul>
      {posts.map((post, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <PostCard key={index} card={post} />
      ))}
    </ul>
  ) : (
    <p>Sem posts...</p>
  );
};
