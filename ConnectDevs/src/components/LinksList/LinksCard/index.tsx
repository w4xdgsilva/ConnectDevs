import { useContext } from 'react';
import { ILinkCardProps } from '../../../providers/ProfileContext/@types';
import { ProfileContext } from '../../../providers/ProfileContext/ProfileContext';
import { StyledParagraph } from '../../../styles/typography';

export const LinksCard = ({ card }: ILinkCardProps) => {
  const { deleteLink } = useContext(ProfileContext);

  return (
    <div>
      <li>
        <StyledParagraph fontColor='white' textAlign='left'>
          {card.link}
        </StyledParagraph>
      </li>
      <button type='button' onClick={() => deleteLink(Number(card.id))}>
        Excluir
      </button>
    </div>
  );
};
