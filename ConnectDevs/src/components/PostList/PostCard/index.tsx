import { iPostCardProp } from '../../../providers/PostsContext/@types';

export const PostCard = ({ card }: iPostCardProp) => (
  <li>
    <div>
      {/* <p>{user.name.charAt(0)}</p>
      <p>{user.username}</p> */}
    </div>
    <div>
      <p>{card.title}</p>
      <p>{card.text}</p>
    </div>
  </li>
);
