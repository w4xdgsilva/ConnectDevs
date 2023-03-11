/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useContext} from 'react';
import { ProfileContext } from '../../providers/ProfileContext/ProfileContext';

export const LinksList = () => {
  
  const { links, deleteLink } = useContext(ProfileContext);

  const user = JSON.parse(localStorage.getItem('@CONNECTDEVS:USER') || 'null');

  console.log(links)


  return links?.length > 0 ? (
    <ul>
      {links.map((item) =>
        item.userId === user.id ? 
        <li>
        <h2>{item.link}</h2>
        <button onClick={() =>  deleteLink(item.id)}>Delete</button>
      </li> : null
      )}
    </ul>
  ) : (
    <p>Você ainda não possui nenhum post. Crie seu primeiro post!</p>
  );

};
