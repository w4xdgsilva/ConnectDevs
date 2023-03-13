import { useContext } from 'react';
import { UserPostCard } from './UserPostCard';
import { StyledUserPostList } from './style';
import { ProfileContext } from '../../providers/ProfileContext/ProfileContext';

export const UserPostsList = () => {
  const { userPosts } = useContext(ProfileContext);

  const user = JSON.parse(localStorage.getItem('@CONNECTDEVS:USER') || 'null');

  return userPosts.length > 0 ? (
    <StyledUserPostList>
      {userPosts.map((post) =>
        post.userId === user.id ? (
          <UserPostCard key={post.id} card={post} />
        ) : null
      )}
    </StyledUserPostList>
  ) : (
    <p>Você ainda não possui nenhum post. Crie seu primeiro post!</p>
  );
};
