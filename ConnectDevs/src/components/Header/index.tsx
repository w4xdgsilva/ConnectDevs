
import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BiHome } from 'react-icons/bi'
import { StyledHeader } from './StyledHeader';
import { StyledContainer } from '../../styles/grid';
import logo from '../../assets/logo.svg';
import { StyledButton } from '../../styles/button';
import { UserContext } from '../../providers/UserContext/UserContext';
import { StyledParagraph } from '../../styles/typography';

export const Header = () => {
  const { userData, userLogout } = useContext(UserContext);
  const location = useLocation();
  const currentPage = location.pathname;

  return (
    <StyledHeader>
      <StyledContainer containerWidth={1250}>
        <nav>
          <img src={logo} alt='Logo do site escrito Connect Devs' />
          <div>
            {currentPage === '/' ? (
              <Link
                to='/profilePage'
                title={userData?.username}
                className='user__prof'
                aria-label='Acessar perfil'
              >
                <StyledParagraph fontColor='white'>
                  {userData?.username.charAt(0)}
                </StyledParagraph>
              </Link>

            ) : (
              <Link
                to='/'
                title='Voltar para a Home'
                className='user__prof'
                aria-label='Voltar para a Home'
              >
                <BiHome color='white'/>
              </Link>
            )}

            <StyledButton
              $buttonSize='medium'
              $buttonStyle='gray'
              type='submit'
              title='Sair da Conta'
              aria-label='Sair da Conta'
              onClick={userLogout}
            >
              Sair
            </StyledButton>
          </div>
        </nav>
      </StyledContainer>
    </StyledHeader>
  );
};

