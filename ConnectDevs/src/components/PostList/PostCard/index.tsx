import {
  MdInsertComment,
  MdThumbDownOffAlt,
  MdThumbUpOffAlt
} from 'react-icons/md';
import { useContext } from 'react';
import { StyledPostCard } from './StyledPostCard';
import { iPostCardProp } from '../../../providers/PostsContext/@types';
import { StyledParagraph } from '../../../styles/typography';
import { PostsContext } from '../../../providers/PostsContext/PostsContext';
import { UserProfilePicture } from '../../UserProfilePicture';

export const PostCard = ({ card }: iPostCardProp) => {
  const { liked, setLiked, likes, setLikes } = useContext(PostsContext);
  return (
    <StyledPostCard>
      <div className='post__card-top'>
        <UserProfilePicture card={card} />
        <StyledParagraph fontColor='white'>{card.username}</StyledParagraph>
      </div>
      <div className='post__card-bottom'>
        <StyledParagraph fontColor='white'>{card.title}</StyledParagraph>
        <StyledParagraph fontColor='white'>{card.text}</StyledParagraph>
        <div className='post__card-interact'>
          <button title='Like this post!' type='button'>
            <MdThumbUpOffAlt type='button' fontSize='1.5rem' />
          </button>
          <StyledParagraph fontColor='white' textAlign='center'>
            {likes}
          </StyledParagraph>
          <button title='Dislike this post' type='button'>
            <MdThumbDownOffAlt fontSize='1.5rem' />
          </button>
          <button title='Leave a comment!' type='button'>
            <MdInsertComment fontSize='1.5rem' />
          </button>
        </div>
      </div>
    </StyledPostCard>
  );
};
