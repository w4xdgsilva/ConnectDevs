import React, { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { iId, iUserPost } from '../../../providers/ProfileContext/@types';
import { ProfileContext } from '../../../providers/ProfileContext/ProfileContext';
import { Input } from '../Input';
import { TextArea } from '../TextArea';

export const EditPost = () => {
  const { UpdatePost, removePost, editPost } = useContext(ProfileContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserPost>();
  const submitEvent: SubmitHandler<iUserPost> = () => {
    console.log(editPost);
  };
  return (
    <form onSubmit={handleSubmit(submitEvent)}>
      <Input
        label='Titulo'
        placeholder='Titulo'
        type='text'
        register={register('title')}
        error={errors.title}
        hiddenButton={false}
      />
      <TextArea
        label='Texto'
        placeholder='Digite aqui seu post'
        register={register('text')}
        error={errors.text}
        minRows={2}
      />
      <button type='submit'>Enviar</button>
      <button type='button'>Excluir</button>
    </form>
  );
};
