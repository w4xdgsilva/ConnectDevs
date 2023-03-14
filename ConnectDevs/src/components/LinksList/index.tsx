import { useContext } from 'react';
import { StyledListLink } from './StyledLinks';
import { LinksCard } from './LinksCard';
import { Form } from '../Forms/UploadLink/index';
import { ProfileContext } from '../../providers/ProfileContext/ProfileContext';

export const LinksList = () => {
  const { links, deleteLink } = useContext(ProfileContext);

  const user = JSON.parse(localStorage.getItem('@CONNECTDEVS:USER') || 'null');

  console.log(links);

  return links?.length > 0 ? (
    <StyledListLink>
      <ul>
        {links.map((item) =>
          item.userId === user.id ? (
              <LinksCard key={item.id} card={item} />
          ) : null
        )}
      </ul>
      <Form />
    </StyledListLink>
  ) : (
    <>
      <Form />
      <p>Você ainda não possui nenhum post. Crie seu primeiro post!</p>
    </>
  );
};
