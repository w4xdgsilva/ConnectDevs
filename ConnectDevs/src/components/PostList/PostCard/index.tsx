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

export const PostCard = ({ card }: iPostCardProp) => {
  const { liked, setLiked, likes, setLikes } = useContext(PostsContext);
  return (
    <StyledPostCard>
      <div className='post__card-top'>
        <StyledParagraph
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
        <div className='post__card-interact'>
          <button
            type='button'
            title='Curtir este Post'
            aria-label='Curtir este Post'
          >
            <MdThumbUpOffAlt fontSize='1.5rem' />
          </button>
          <StyledParagraph fontColor='white' textAlign='center'>
            {likes}
          </StyledParagraph>
          <button
            type='button'
            title='Descurtir este Post'
            aria-label='Descurtir este Post'
          >
            <MdThumbDownOffAlt fontSize='1.5rem' />
          </button>
          <button
            type='button'
            title='Deixar um Comentário'
            aria-label='Deixar um Comentário'
          >
            <MdInsertComment fontSize='1.5rem' />
          </button>
        </div>
      </div>
    </StyledPostCard>
  );
};
