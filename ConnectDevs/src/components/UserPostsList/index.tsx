import { useContext } from 'react';
import { ProfileContext } from '../../providers/ProfileContext/ProfileContext';

import { PostCard } from '../PostList/PostCard';

export const UserPostsList = () => {
  const { userPosts } = useContext(ProfileContext);

  const user = JSON.parse(localStorage.getItem('@CONNECTDEVS:USER') || 'null');

  return userPosts.length > 0 ? (
    <ul>
      {userPosts.map((post) =>
        post.userId === user.id ? <PostCard key={post.id} card={post} /> : null
      )}
    </ul>
  ) : (
    <p>Você ainda não possui nenhum post. Crie seu primeiro post!</p>
  );
};
