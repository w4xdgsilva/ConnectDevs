import React from 'react';
import { Link } from 'react-router-dom';
import { RegisterForm } from '../../components/Forms/Register';

export const RegisterPage = () => (
    <main>
        <section>
            <h1>{'<ConnectDEVs/>'}</h1>
            <h2>Cadastro</h2>
            <p>Embarque na maior rede de developers do brasil</p>
            <RegisterForm />
            <Link to='/login'>Já tem uma conta? Retornar para o login</Link>
        </section>
    </main>
)