import { useContext } from 'react';
import { ILinkCardProps } from '../../../providers/ProfileContext/@types';
import { ProfileContext } from '../../../providers/ProfileContext/ProfileContext';

export const LinksCard = ({ card }: ILinkCardProps) => {
  const { deleteLink } = useContext(ProfileContext);

return (
    <div>
  <li>
    <h2>{card.link}</h2>
 
  </li>
  <button type='button' onClick={() => deleteLink(Number(card.id))}>
      Excluir
    </button>
  </div>
)
}