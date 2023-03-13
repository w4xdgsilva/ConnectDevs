/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useContext } from 'react';
import { iPostCardProp } from '../../../providers/PostsContext/@types';
import { ProfileContext } from '../../../providers/ProfileContext/ProfileContext';

export const PostCard = ({ card }: iPostCardProp) => {
  const { setEditPost } = useContext(ProfileContext);
  return (
    <li>
      <div>
        <p>{card.username.charAt(0)}</p>
        <p>{card.username}</p>
      </div>
      <div>
        <p>{card.title}</p>
        <p>{card.text}</p>
      </div>
    </li>
  );
};
