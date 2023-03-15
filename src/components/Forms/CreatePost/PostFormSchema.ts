import * as yup from 'yup';

export const postFormSchema = yup.object().shape({
  title: yup.string().required('Campo Obrigatorio'),
  text: yup.string().required('Campo Obrigatorio'),
});
