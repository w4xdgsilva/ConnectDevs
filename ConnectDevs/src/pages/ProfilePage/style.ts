import styled from 'styled-components';

export const StyledUserEditsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  @media (min-width: 698px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;
