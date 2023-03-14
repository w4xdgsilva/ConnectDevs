import React, { useContext } from 'react';
import { LinkCard } from './ProfileListCard';
import { StyledAsideLinks } from './StyledAsideLinks';
import { PostsContext } from '../../providers/PostsContext/PostsContext';

export const AsideProfileLinks = () => {
  const { selectedUser, userLinks } = useContext(PostsContext);
  return (
    <StyledAsideLinks>
      <ul>
        {userLinks && userLinks.length > 0 ? (
          userLinks.map((link) =>
            link.userId === selectedUser ? (
              <LinkCard key={link.id} card={link} />
            ) : null
          )
        ) : (
          <div className='empty__links'>
            <p>Sem links</p>
          </div>
        )}
      </ul>
    </StyledAsideLinks>
  );
};
