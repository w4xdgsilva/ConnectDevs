import React from 'react';
import { StyledButton } from '../../styles/button';

export const Header = () => (
  <header>
    <nav>
      <h1>{'<ConnectDEVs/>'}</h1>
      <p>Pic</p>
      <StyledButton
        $buttonSize='medium'
        $buttonStyle='gray'
        type='button'
        title='Finalizar sessão'
        aria-label='Finalizar sessão'
      >
        Sair
      </StyledButton>
    </nav>
  </header>
);
