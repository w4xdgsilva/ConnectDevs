import React, { useContext } from 'react';
import { UserContext } from '../../providers/UserContext/UserContext';
import { LinksList } from '../LinksList';

export const AsideProfileLinks = () => {
  const { userData } = useContext(UserContext);
  return (
    <aside>
      <LinksList />
    </aside>
  );
};
