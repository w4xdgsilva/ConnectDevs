import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface IStyledButtonProps {
  $buttonSize?: 'default' | 'medium';
  $buttonStyle: 'blue' | 'gray';
}

export const StyledButtonCSS = css<IStyledButtonProps>`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-family: ${({ theme }) => theme.fonts.primary}, sans-serif;
  font-weight: 700;
  font-size: 1rem;
  text-align: center;

  border-radius: 8px;

  transition: 0.4s;

  ${({ $buttonSize }) => {
    switch ($buttonSize) {
      case 'default':
        return css`
          padding: 0 30px;
          height: 50px;
          border-radius: 16px;
        `;
      case 'medium':
        return css`
          padding: 0 20px;
          height: 40px;
        `;
      default:
        return css`
          padding: 0 20px;
          height: 35px;
          font-size: 0.875rem;
        `;
    }
  }}

  ${({ theme, $buttonStyle }) => {
    switch ($buttonStyle) {
      case 'blue':
        return css`
          color: ${theme.colors.white};
          background: ${theme.colors.primary};
          &:hover {
            background: ${theme.colors.secondary};
          }
        `;
      case 'gray':
        return css`
          color: ${theme.colors.white};
          background: ${theme.colors.gray50};

          &:hover {
            color: ${theme.colors.gray100};
            background: ${theme.colors.gray30};
          }
        `;
      default:
        return '';
    }
  }}
`;

export const StyledButton = styled.button<IStyledButtonProps>`
  ${StyledButtonCSS}
`;

export const StyledButtonLink = styled(Link)`
  ${StyledButtonCSS}
`;
