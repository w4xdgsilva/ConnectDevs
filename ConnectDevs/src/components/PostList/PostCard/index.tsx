import { useContext } from 'react';
import { iPostCardProp } from '../../../providers/PostsContext/@types';
import { PostsContext } from '../../../providers/PostsContext/PostsContext';

export const PostCard = ({ card }: iPostCardProp) => {
  const { userFormatted } = useContext(PostsContext);
  return (
    <li>
      <div>
        <p>{card.username}</p>
        <p>{card.username}</p>
      </div>
      <div>
        <p>{card.title}</p>
        <p>{card.text}</p>
      </div>
    </li>
  );
};
