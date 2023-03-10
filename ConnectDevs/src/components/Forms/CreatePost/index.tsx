import React, { useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { postFormSchema } from './PostFormSchema';
import { iPostsData } from '../../../providers/PostContext/@types';
import { PostContext } from '../../../providers/PostContext/PostContext';
import { Input } from '../Input';

export const CreatePostForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iPostsData>({ resolver: yupResolver(postFormSchema) });

  const { CreatePost } = useContext(PostContext);

  const submitEvent: SubmitHandler<iPostsData> = (formData) => {
    const user = JSON.parse(
      localStorage.getItem('@CONNECTDEVS:USER') || 'null'
    );

    const { username, id } = user;
    const userId = id;
    const data = { ...formData, userId, username };

    CreatePost(data);
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
        multiline={false}
        rows={0}
      />
      <Input
        label='Texto'
        placeholder='Digite aqui seu post'
        type='text'
        register={register('text')}
        error={errors.text}
        hiddenButton={false}
        multiline
        rows={2}
      />
      <button type='submit'>Enviar</button>
    </form>
  );
};
