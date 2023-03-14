import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginFormSchema } from './LoginFormSchema';
import { Input } from '../Input';
import { ILoginFormData } from '../../../providers/UserContext/@types';
import { UserContext } from '../../../providers/UserContext/UserContext';
import Spinner from '../../Spinner/Spinner';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ILoginFormData>({ resolver: yupResolver(loginFormSchema) });

  const { userLogin, isLoading } = useContext(UserContext);

  const submitEvent = (formData: ILoginFormData) => {
    userLogin(formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submitEvent)}>
      <Input
        label='Email'
        placeholder='Email'
        type='email'
        hiddenButton={false}
        register={register('email')}
        error={errors.email}
      />
      <Input
        label='Senha'
        placeholder='Senha'
        type='password'
        hiddenButton
        register={register('password')}
        error={errors.password}
      />
      <StyledButton
        $buttonSize='default'
        $buttonStyle='blue'
        type='submit'
        disabled={isLoading}
        title='Entrar na conta'
        aria-label='Entrar na conta'
        className='brand__btn'
      >
        {isLoading ? <Spinner /> : 'Entrar'}
      </StyledButton>
    </StyledForm>
  );
};
