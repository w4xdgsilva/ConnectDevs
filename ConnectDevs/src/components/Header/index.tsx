import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StyledHeader } from './StyledHeader';
import { StyledContainer } from '../../styles/grid';
import logo from '../../assets/logo.svg';
import { StyledButton } from '../../styles/button';
import { UserContext } from '../../providers/UserContext/UserContext';
import { StyledParagraph } from '../../styles/typography';

export const Header = () => {
  const { userData } = useContext(UserContext);

  return (
    <StyledHeader>
      <StyledContainer containerWidth={1250}>
        <nav>
          <img src={logo} alt='Logo do site escrito Connect Devs' />
          <div>
            <Link
              to='/profilePage'
              title={userData?.username}
              className='user__prof'
            >
              <StyledParagraph fontColor='white'>
                {userData?.username.charAt(0)}
              </StyledParagraph>
            </Link>
            <StyledButton
              $buttonSize='medium'
              $buttonStyle='gray'
              type='submit'
            >
              Sair
            </StyledButton>
          </div>
        </nav>
      </StyledContainer>
    </StyledHeader>
  );
};
