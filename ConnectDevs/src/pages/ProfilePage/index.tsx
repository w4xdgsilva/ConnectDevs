import React, { useContext } from 'react';

import { StyledUserEditsContainer } from './style';
import { AddModal } from '../../components/AddModal';
import { Header } from '../../components/Header';
import { LinksList } from '../../components/LinksList';
import { UserPostsList } from '../../components/UserPostsList';
import { UserProfileHeader } from '../../components/UserProfileHeader';
import { ProfileContext } from '../../providers/ProfileContext/ProfileContext';
import { StyledContainer } from '../../styles/grid';

export const ProfilePage = () => {
  const { modalAdd } = useContext(ProfileContext);

  return (
    <>
      <Header />
      <StyledContainer containerWidth={1250}>
        <UserProfileHeader />
        <StyledUserEditsContainer>
          <UserPostsList />
          <LinksList />
        </StyledUserEditsContainer>
      </StyledContainer>
      {modalAdd ? <AddModal /> : null}
    </>
  );
};
