import React from 'react';
import { IPostCardProp } from '../../providers/PostsContext/@types';
import { StyledParagraph } from '../../styles/typography';

export const UserProfilePicture = ({ card }: IPostCardProp) => (
  <StyledParagraph
    fontColor='white'
    title={card.username}
    className='user__prof'
  >
    {card.username.charAt(0)}
  </StyledParagraph>
);
