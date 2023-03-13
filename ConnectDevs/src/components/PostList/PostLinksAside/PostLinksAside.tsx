import React, { useContext } from 'react';
import { StyledContainer } from '../../../styles/grid';
import { ProfileContext } from '../../../providers/ProfileContext/ProfileContext';

export const PostLinksAside = () => {
  const { links } = useContext(ProfileContext);
  const user = JSON.parse(localStorage.getItem('@CONNECTDEVS:USER') || 'null');
  return links?.length > 0 ? (
    <StyledContainer>
      <ul>
        {links.map((item) =>
          item.userId === user.id ? (
            <div>
              <li>
                <h2>{item.link}</h2>
              </li>
            </div>
          ) : null
        )}
      </ul>
    </StyledContainer>
  ) : (
    <StyledContainer>
      <p>Clique em usuário com links válidos</p>
    </StyledContainer>
  );
};
