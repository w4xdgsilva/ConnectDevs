import React, { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { StyledModalForm } from './styledEditPost';
import { IUserPost } from '../../../providers/ProfileContext/@types';
import { ProfileContext } from '../../../providers/ProfileContext/ProfileContext';

import { Input } from '../../Forms/Input';
import { TextArea } from '../../Forms/TextArea';
import { StyledButton } from '../../../styles/button';

export const EditPost = () => {
  const { updatePost, removePost, selectedPost } = useContext(ProfileContext);
  const id = selectedPost?.id;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IUserPost>();
  const submitEvent: SubmitHandler<IUserPost> = (data, postId) => {
    if (id) {
      updatePost(data, id);
      reset();
    }
  };
  return (
    <StyledModalForm onSubmit={handleSubmit(submitEvent)}>
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
        minRows={2}
      />
      <div className='buttons__area'>
        <StyledButton
          $buttonStyle='blue'
          $buttonSize='default'
          type='submit'
          title='Editar publicação'
          aria-label='Editar publicação'
        >
          Enviar
        </StyledButton>
        <StyledButton
          $buttonStyle='gray'
          $buttonSize='default'
          type='button'
          title='Remover publicação'
          aria-label='Remover publicação'
          onClick={() => {
            if (id) {
              removePost(id);
            }
          }}
        >
          Excluir
        </StyledButton>
      </div>
    </StyledModalForm>
  );
};
