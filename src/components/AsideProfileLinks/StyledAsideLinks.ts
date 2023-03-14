import styled from 'styled-components';

export const StyledAsideLinks = styled.aside`
  border-radius: 8px;
  padding: 1.625rem 1rem;
  background-color: ${({ theme }) => theme.colors.gray70};

  @media (min-width: 800px) {
    width: 100%;
    height: 300px;
    position: sticky;
    max-width: 350px;
    top: 120px;
    width: 100%;
  }

  ul {
    width: 100%;
    height: 260px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    gap: 0.8125rem;
  }
`;
