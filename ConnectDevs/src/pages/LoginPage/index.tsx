import React from 'react';
import { Link } from 'react-router-dom';
import { LoginForm } from '../../components/Forms/Login';

export const LoginPage = () => (
    <main>
        <section>
            <h1>{'<ConnectDEVs/>'}</h1>
            <h2>Login</h2>
            <p>Entre na maior rede de developers do brasil</p>
            <LoginForm />
            <Link to='/register'>Ainda não tem uma conta? Cadastre-se aqui</Link>
        </section>
    </main>
)