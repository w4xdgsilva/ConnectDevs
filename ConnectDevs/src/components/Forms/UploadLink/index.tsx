/* eslint-disable react/button-has-type */
import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { StyledFormLink } from './indexCSS';
import {  iData, iInput } from '../../../providers/ProfileContext/@types'
import { ProfileContext } from '../../../providers/ProfileContext/ProfileContext';

export const Form = () => {

  const { uploadLink } = useContext(ProfileContext);
  const { register, handleSubmit } = useForm<iInput>();

  const submit: SubmitHandler<iData> = (formData) => {
    const user =  JSON.parse(
      localStorage.getItem('@CONNECTDEVS:USER') || 'null')
      const userId = user.id
    const data = {...formData, userId}
    console.log(formData)
    uploadLink(data)
  };

  return <div>
              <StyledFormLink onSubmit={handleSubmit(submit)}>
                <input type='text' 
                 placeholder='URL Link'
                 {...register('link')}/>
                 <button>Add</button>
              </StyledFormLink>       
        </div>

};
