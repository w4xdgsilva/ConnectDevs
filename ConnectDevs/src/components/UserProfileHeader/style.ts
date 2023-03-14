import styled from 'styled-components';

export const StyledUserContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 90px;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: max-content;
    transform: translateY(133px);

    h2,
    h3 {
      color: ${({ theme }) => theme.colors.white};
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      width: max-content;
      transform: translateY(133px);

      h2,
      h3 {
        color: ${({ theme }) => theme.colors.white};
      }

      h2 {
        background-color: ${({ theme }) => theme.colors.gray100};
        border: 3px solid ${({ theme }) => theme.colors.secondary};
        font-size: 2.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 150px;
        height: 150px;
        border-radius: 50%;
      }

      h3 {
        font-size: 1.75rem;
      }
    }
  }
`;
