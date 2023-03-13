import React from 'react';
import { Link } from 'react-router-dom';
import { StyledRegisterPage } from './style';
import logo from '../../assets/logo.svg'
import { RegisterForm } from '../../components/Forms/Register';
import { StyledContainer } from '../../styles/grid';
import { StyledParagraph, StyledTitle } from '../../styles/typography';

export const RegisterPage = () => (
    <StyledRegisterPage>
        <StyledContainer containerWidth={488} className='pageContainer'>
            <section>
                <img src={logo} alt='Logo do site escrito Connect Devs' />
                <StyledTitle
                    tag='h2'
                    $fontSize='two'
                    textAlign='center'
                >
                    Cadastro
                </StyledTitle>
                <StyledParagraph textAlign='center'>
                    Embarque na maior rede de developers do brasil
                </StyledParagraph>
                <RegisterForm />
                <Link
                    to='/login'
                    title='Acessar página de Login'
                    aria-label='Acessar página de Login'
                >
                    Já tem uma conta? Retornar para o login
                </Link>
            </section>
        </StyledContainer>
    </StyledRegisterPage>
)