import { useContext } from 'react';
import { PostsContext } from '../../providers/PostsContext/PostsContext';
import { PostCard } from '../PostList/PostCard';

export const UserPostsList = () => {
  const { posts } = useContext(PostsContext);
  const user = JSON.parse(localStorage.getItem('@CONNECTDEVS:USER') || 'null');
  console.log(posts);
  return posts.length > 0 ? (
    <ul>
      {posts.map((post) =>
        post.userId === user.id ? <PostCard key={post.id} card={post} /> : null
      )}
    </ul>
  ) : (
    <p>Você ainda não possui nenhum post. Crie seu primeiro post!</p>
  );
};
