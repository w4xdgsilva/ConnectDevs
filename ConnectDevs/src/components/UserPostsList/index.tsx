import { useContext } from 'react';
import { PostsContext } from '../../providers/PostsContext/PostsContext';
import { UserContext } from '../../providers/UserContext/UserContext';

export const UserPostsList = () => {
  const { posts } = useContext(PostsContext);
  const { userData } = useContext(UserContext);
  return <div>UserPostsList</div>;
};
