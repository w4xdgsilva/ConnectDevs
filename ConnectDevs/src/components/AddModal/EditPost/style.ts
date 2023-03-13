import styled from 'styled-components';
import { StyledForm } from '../../../styles/form';

export const StyledModalForm = styled(StyledForm)`
  width: 100%;
  padding: 0 1rem;

  .buttons__area {
    width: 50%;
    padding-bottom: 1rem;
    display: flex;
    align-items: center;
    align-self: center;
    gap: 1rem;

    button {
      width: 50%;
    }
  }
`;
