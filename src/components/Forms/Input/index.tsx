import React, { useState } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { StyledFieldset } from './style';
import { StyledTextField } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';

interface iInputProps {
  label?: string;
  type: 'text' | 'email' | 'password';
  placeholder: string;
  register: UseFormRegisterReturn<string>;
  hiddenButton: boolean;
  error?: FieldError;
}

export const Input = ({
  label,
  type,
  placeholder,
  register,
  hiddenButton,
  error,
}: iInputProps) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <StyledFieldset>
      <StyledTextField
        label={label || ''}
        type={type === 'password' && isHidden ? 'password' : 'text'}
        placeholder={placeholder}
        {...register}
      />

      {hiddenButton ? (
        <button type='button' onClick={() => setIsHidden(!isHidden)}>
          {isHidden ? <MdVisibility /> : <MdVisibilityOff />}
        </button>
      ) : null}

      {error ? <StyledParagraph>{error.message}</StyledParagraph> : null}
    </StyledFieldset>
  );
};
