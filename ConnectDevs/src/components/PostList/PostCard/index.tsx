import { iPostCardProp } from '../../../providers/PostsContext/@types';

export const PostCard = ({ card }: iPostCardProp) => (
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
