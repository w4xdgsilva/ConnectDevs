import * as yup from 'yup'

export const registerFormSchema = yup.object().shape({
    name: yup.string().required('Nome de usuário obrigatório')
    .max(18, 'O nome deve conter no máximo dezoito caracteres'),
    email: yup.string().required('E-mail obrigatório')
    .email('E-mail inválido'),
    username: yup.string().required('Nome de Usuário obrigatório'),
    password: yup.string().required('Senha obrigatória')
    .min(8, 'A senha deve conter ao menos oito caracteres')
    .matches(/^(?=.*[A-Z])/, 'A senha deve conter caracteres maiúsculos')
    .matches(/^(?=.*[a-z])/, 'A senha deve conter caracteres minúsculos')
    .matches(/^(?=.*[0-9])/, 'A senha deve conter números')
    .matches(/^(?=.*[!@#$%&*])/, 'A senha deve conter caracteres especiais'),
    confirmPassword: yup.string().required('Confirmação de senha obrigatória')
    .oneOf([yup.ref('password')], 'As senhas devem ser iguais'),
})