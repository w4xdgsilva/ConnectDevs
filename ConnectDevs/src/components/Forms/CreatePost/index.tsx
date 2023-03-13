import React, { useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { postFormSchema } from './PostFormSchema';

import { Input } from '../Input';
import { iPostBody } from '../../../providers/PostsContext/@types';
import { PostsContext } from '../../../providers/PostsContext/PostsContext';
import { StyledContainer } from '../../../styles/grid';
import { StyledButton } from '../../../styles/button';
import { TextArea } from '../TextArea';

export const CreatePostForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iPostBody>({ resolver: yupResolver(postFormSchema) });

  const { CreatePost } = useContext(PostsContext);

  const submitEvent: SubmitHandler<iPostBody> = (formData) => {
    const user = JSON.parse(
      localStorage.getItem('@CONNECTDEVS:USER') || 'null'
    );

    const { username, id } = user;
    const userId = id;
    const data = { ...formData, userId, username };

    CreatePost(data);
  };
  return (
    <StyledContainer containerWidth={1250}>
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
          placeholder='Digite aqui seu post'
          register={register('text')}
          error={errors.text}
          minRows={4}
        />
        <StyledButton
          $buttonSize='medium'
          $buttonStyle='blue'
          type='submit'
          title='Criar publicação'
          aria-label='Criar publicação'
        >
          Enviar
        </StyledButton>
      </form>
    </StyledContainer>
  );
};
