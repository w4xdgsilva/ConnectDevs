import React, { useState } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { StyledTextField } from '../../../styles/form';

interface iInputProps {
  label?: string;
  type: 'text' | 'email' | 'password';
  placeholder: string;
  register: UseFormRegisterReturn<string>;
  hiddenButton: boolean;
  multiline?: boolean;
  rows?: number;
  error?: FieldError;
}

export const Input = ({
  label,
  type,
  placeholder,
  register,
  hiddenButton,
  error,
  multiline,
  rows,
}: iInputProps) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <fieldset>
      <StyledTextField
        label={label || ''}
        type={type === 'password' && isHidden ? 'password' : 'text'}
        placeholder={placeholder}
        {...register}
        multiline={multiline}
        rows={rows}
      />

      {hiddenButton ? (
        <button type='button' onClick={() => setIsHidden(!isHidden)}>
          {isHidden ? <MdVisibility /> : <MdVisibilityOff />}
        </button>
      ) : null}

      {error ? <p>{error.message}</p> : null}
    </fieldset>
  );
};
