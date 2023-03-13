import React, { useContext } from 'react';
import { LinkCard } from './ProfileListCard';
import { PostsContext } from '../../providers/PostsContext/PostsContext';

export const AsideProfileLinks = () => {
  const { selectedUser, userLinks } = useContext(PostsContext);
  return (
    <aside>
      <ul>
        {userLinks && userLinks.length > 0 ? (
          userLinks.map((link) =>
            link.userId === selectedUser ? (
              <LinkCard key={link.id} card={link} />
            ) : null
          )
        ) : (
          <p>Sem links</p>
        )}
      </ul>
    </aside>
  );
};
