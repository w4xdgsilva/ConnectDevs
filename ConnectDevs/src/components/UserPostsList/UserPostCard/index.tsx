/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useContext } from 'react';

import { StyledUserPostCard } from './style';
import { IUserCardProps } from '../../../providers/ProfileContext/@types';
import { ProfileContext } from '../../../providers/ProfileContext/ProfileContext';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';

export const UserPostCard = ({ card }: IUserCardProps) => {
  const { setSelectedPost, modalAdd, setModalAdd } = useContext(ProfileContext);

  return (
    <StyledUserPostCard
      onClick={() => {
        setSelectedPost(card);
      }}
    >
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
      </div>
      <StyledButton
        className='button__size'
        $buttonSize='medium'
        $buttonStyle='blue'
        type='button'
        onClick={() => {
          setModalAdd(!modalAdd);
        }}
      >
        Infos
      </StyledButton>
    </StyledUserPostCard>
  );
};
