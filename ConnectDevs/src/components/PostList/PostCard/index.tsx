import { useContext } from 'react';
import { StyledPostCard } from './StyledPostCard';
import { PostsContext } from '../../../providers/PostsContext/PostsContext';
import { IPostCardProp } from '../../../providers/PostsContext/@types';
import { StyledParagraph } from '../../../styles/typography';

export const PostCard = ({ card }: IPostCardProp) => {
  const { setSelectedUser } = useContext(PostsContext);
  const id = card?.userId;
  return (
    <StyledPostCard>
      <div className='post__card-top'>
        <StyledParagraph
          onClick={() => {
            setSelectedUser(id);
          }}
          fontColor='white'
          title={card.username}
          className='user__prof'
        >
          {card.username.charAt(0)}
        </StyledParagraph>
        <StyledParagraph fontColor='white'>{card.username}</StyledParagraph>
      </div>
      <div className='post__card-bottom'>
        <StyledParagraph fontColor='white'>{card.title}</StyledParagraph>
        <StyledParagraph fontColor='white'>{card.text}</StyledParagraph>
      </div>
    </StyledPostCard>
  );
};
