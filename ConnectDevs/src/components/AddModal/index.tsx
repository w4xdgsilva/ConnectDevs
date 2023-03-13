import { useContext } from 'react';
import { EditPost } from './EditPost';
import { BodyContainer, ModalContainer, ModalHeader } from './style';
import { ProfileContext } from '../../providers/ProfileContext/ProfileContext';
import { StyledTitle } from '../../styles/typography';

export const AddModal = () => {
  const { setModalAdd, handleOutsideClick } = useContext(ProfileContext);
  return (
    <BodyContainer
      onClick={(event) => {
        handleOutsideClick(event);
      }}
    >
      <ModalContainer>
        <ModalHeader>
          <StyledTitle tag='h3' $fontSize='four'>
            Detalhes do seu Post
          </StyledTitle>
          <button type='button' onClick={() => setModalAdd(false)}>
            X
          </button>
        </ModalHeader>
        <EditPost />
      </ModalContainer>
    </BodyContainer>
  );
};
