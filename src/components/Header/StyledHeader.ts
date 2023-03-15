import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  padding: 25px 0;
  background-color: ${({ theme }) => theme.colors.gray70};
  position: fixed;
  z-index: 10;
  top: 0;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 230px;
    }

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1rem;
    }
  }
`;
