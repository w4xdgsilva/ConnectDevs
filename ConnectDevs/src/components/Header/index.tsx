import React, { useContext } from 'react';
import { UserContext } from '../../providers/UserContext/UserContext';
import { StyledButton } from '../../styles/button';

export const Header = () => {
  const { userLogout } = useContext(UserContext)

  return (
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
          onClick={userLogout}
        >
          Sair
        </StyledButton>
      </nav>
    </header>
  )
};
