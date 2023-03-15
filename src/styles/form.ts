import { TextField, TextareaAutosize } from '@mui/material';
import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 30px 24px;
  background-color: ${({ theme }) => theme.colors.gray70};
  border-radius: 8px;
  align-items: flex-end;

  button {
    width: 100%;
  }
`;

export const StyledTextArea = styled(TextareaAutosize)`
  background-color: ${({ theme }) => theme.colors.gray50};
  font-family: ${({ theme }) => theme.fonts.primary}, sans-serif;
  border-color: ${({ theme }) => theme.colors.gray50}!important;
  outline-color: ${({ theme }) => theme.colors.gray50}!important;
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Nunito', sans-serif;
  font-weight: 500;
  border-radius: 16px;
  padding: 16px 14px;
  width: 100%;
  max-height: 134px;
  transition: 0.6;
  resize: none;

  &::placeholder {
    font-family: 'Nunito', sans-serif;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 400;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.white}!important;
    outline-color: ${({ theme }) => theme.colors.white}!important;
  }

  &:focus::placeholder {
    color: #8d9296;
    font-weight: 500;
  }

  &:-webkit-autofill {
    border-radius: 16px;
  }
`;

export const StyledTextField = styled(TextField)`
  width: 100%;

  input {
    background-color: ${({ theme }) => theme.colors.gray50};
    font-family: ${({ theme }) => theme.fonts.primary}, sans-serif;
    color: ${({ theme }) => theme.colors.white};
    font-family: 'Nunito', sans-serif;
    border-radius: 16px;
  }

  input:-webkit-autofill {
    border-radius: 16px;
  }

  label {
    color: ${({ theme }) => theme.colors.white};

    &.Mui-focused {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  fieldset {
    border-color: ${({ theme }) => theme.colors.gray50}!important;
    outline-color: ${({ theme }) => theme.colors.gray50}!important;
    border-radius: 16px;
  }

  .Mui-focused {
    fieldset {
      border-color: ${({ theme }) => theme.colors.white}!important;
      outline-color: ${({ theme }) => theme.colors.white}!important;
    }
  }
`;
