import React from 'react';
import { iPostCardProp } from '../../providers/PostsContext/@types';
import { StyledParagraph } from '../../styles/typography';

export const UserProfilePicture = ({ card }: iPostCardProp) => (
  <StyledParagraph
    fontColor='white'
    title={card.username}
    className='user__prof'
  >
    {card.username.charAt(0)}
  </StyledParagraph>
);
