import React from 'react';
import { Link } from 'react-router-dom';
import { StyledLoginPage } from './style';
import logo from '../../assets/logo.svg'
import { LoginForm } from '../../components/Forms/Login';
import { StyledContainer } from '../../styles/grid';
import { StyledParagraph, StyledTitle } from '../../styles/typography';

export const LoginPage = () => (
    <StyledLoginPage>
        <StyledContainer containerWidth={488} className='pageContainer'>
            <section>
                <img src={logo} alt='Logo do site escrito Connect Devs' />
                <StyledTitle
                    tag='h2'
                    $fontSize='two'
                    textAlign='center'
                >
                    Login
                </StyledTitle>
                <StyledParagraph textAlign='center'>
                    Entre na maior rede de developers do brasil
                </StyledParagraph>
                <LoginForm />
                <Link to='/register'>Ainda não tem uma conta? Cadastre-se aqui</Link>
            </section>
        </StyledContainer>
    </StyledLoginPage>
)
