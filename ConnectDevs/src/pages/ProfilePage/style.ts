import styled from 'styled-components';

export const StyledUserEditsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  position: relative;
  @media (min-width: 800px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 10rem;
  }
`;
