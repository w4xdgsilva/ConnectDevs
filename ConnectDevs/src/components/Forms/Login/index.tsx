import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import { loginFormSchema } from './LoginFormSchema';
import { Input } from '../Input';
import { iLoginFormData } from '../../../providers/UserContext/@types';
import { UserContext } from '../../../providers/UserContext/UserContext';
import Spinner from '../../Spinner/Spinner';

export const LoginForm = () => {
  const { register,
    handleSubmit,
    formState: { errors }
  } = useForm<iLoginFormData>({ resolver: yupResolver(loginFormSchema) })

  const { userLogin, isLoading } = useContext(UserContext)

  const submitEvent = (formData: iLoginFormData) => {
    userLogin(formData)
  }

  return (
    <form onSubmit={handleSubmit(submitEvent)}>
      <Input
        label='Email'
        placeholder='Email'
        type='email'
        hiddenButton={false}
        register={register('email')}
        error={errors.email} />
      <Input
        label='Password'
        placeholder='Password'
        type='password'
        hiddenButton
        register={register('password')}
        error={errors.password} />
      <button
        type='submit'
        disabled={isLoading}>
        {isLoading ? <Spinner
        /> : 'Entrar'}
      </button>
    </form>
  )
};
