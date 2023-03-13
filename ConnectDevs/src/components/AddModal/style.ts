import styled from 'styled-components';

export const BodyContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(18, 18, 20, 0.5);
  padding: 0 1rem;

  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ModalContainer = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;

  background-color: ${({ theme }) => theme.colors.gray100};
`;
export const ModalHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.gray50};
  width: 100%;

  height: 50px;
  padding: 0 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px 8px 0 0;

  h3 {
    color: ${({ theme }) => theme.colors.gray30};
  }
  button {
    cursor: pointer;
    width: 30px;
    height: 30px;
    background-color: ${({ theme }) => theme.colors.secondary};
    border: 3px solid ${({ theme }) => theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: ${({ theme }) => theme.colors.gray30};
  }
`;
