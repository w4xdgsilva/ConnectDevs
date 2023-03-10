import React from 'react';
import { Link } from 'react-router-dom';
import { StyledRegisterPage } from './style';
import { RegisterForm } from '../../components/Forms/Register';
import { StyledContainer } from '../../styles/grid';

export const RegisterPage = () => (
    <StyledRegisterPage>
        <StyledContainer containerWidth={488}>
            <section>
                <h1>{'<ConnectDEVs/>'}</h1>
                <h2>Cadastro</h2>
                <p>Embarque na maior rede de developers do brasil</p>
                <RegisterForm />
                <Link to='/login'>Já tem uma conta? Retornar para o login</Link>
            </section>
        </StyledContainer>
    </StyledRegisterPage>
)