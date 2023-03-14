import React from 'react';
import { StyledLinkCard } from './StyledLinkCard';
import { ILinkCardProps } from '../../../providers/ProfileContext/@types';
import { StyledParagraph } from '../../../styles/typography';

export const LinkCard = ({ card }: ILinkCardProps) => (
  <StyledLinkCard>
    <StyledParagraph fontColor='white' className='user__links'>
      <a href={card.link}>{card.link}</a>
    </StyledParagraph>
  </StyledLinkCard>
);
