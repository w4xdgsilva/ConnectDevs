/* eslint-disable react/button-has-type */
import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { StyledFormLink } from './StyledFormLinks';
import { IData, IInput } from '../../../providers/ProfileContext/@types';
import { ProfileContext } from '../../../providers/ProfileContext/ProfileContext';

export const Form = () => {
  const { uploadLink } = useContext(ProfileContext);
  const { register, handleSubmit } = useForm<IInput>();

  const submit: SubmitHandler<IData> = (formData) => {
    const user = JSON.parse(
      localStorage.getItem('@CONNECTDEVS:USER') || 'null'
    );
    const userId = user.id;
    const data = { ...formData, userId };

    uploadLink(data);
  };

  return (
    <div>
      <StyledFormLink onSubmit={handleSubmit(submit)}>
        <input
          type='url'
          placeholder='URL do Link'
          {...register('link')}
        />
        <button title='Publicar novo Link' aria-label='Publicar novo Link'>
          Adicionar
        </button>
      </StyledFormLink>
    </div>
  );
};
