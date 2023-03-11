import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { StyledFieldset } from './style';
import { StyledTextArea } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';

interface iInputProps {
  label?: string;
  placeholder: string;
  register: UseFormRegisterReturn<string>;
  minRows?: number;
  error?: FieldError;
}

export const TextArea = ({
  label,
  placeholder,
  register,
  error,
  minRows,
}: iInputProps) => (
  <StyledFieldset>
    {label ? <label htmlFor={label}>{label}</label>
      : null}
    <StyledTextArea
      id={label || ''}
      placeholder={placeholder}
      {...register}
      minRows={minRows}
    />

    {error ? <StyledParagraph>{error.message}</StyledParagraph> : null}
  </StyledFieldset>
);
