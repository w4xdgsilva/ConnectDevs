/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useContext } from 'react';
import { StyledListLink } from './linksListsCss';
import { Form } from '../Forms/UploadLink/index';
import { ProfileContext } from '../../providers/ProfileContext/ProfileContext';

export const LinksList = () => {
  const { links, deleteLink } = useContext(ProfileContext);

  const user = JSON.parse(localStorage.getItem('@CONNECTDEVS:USER') || 'null');

  return links?.length > 0 ? (
    <StyledListLink>
      <ul>
        {links.map((item) =>
          item.userId === user.id ? (
            <div>
            <li key={item.id}>
              <h2>{item.link}</h2>
            </li><button onClick={() => deleteLink(item.id)}>Delete</button>
            </div>
          ) : null
        )}
      </ul>
      <Form />
    </StyledListLink>
  ) : (
    <><Form /><p>Você ainda não possui nenhum post. Crie seu primeiro post!</p></>
  );
};
