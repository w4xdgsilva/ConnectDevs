import { color } from '@mui/system';
import styled from 'styled-components';

export const StyledPostCard = styled.li`
  display: flex;
  flex-direction: column;
  gap: 2.3125rem;
  background-color: ${({ theme }) => theme.colors.gray70};
  padding: 1.5625rem;
  border-radius: 8px;

  div {
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.gray50};
  }

  .post__card-top,
  .post__card-bottom {
    padding: 0.875rem;
  }

  .post__card-top {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }

  .post__card-bottom {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .post__card-interact {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;

    button {
      background: none;
      border-radius: 50%;
      padding: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${({ theme }) => theme.colors.white};
    }
    button:hover {
      background-color: ${({ theme }) => theme.colors.gray70};
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
