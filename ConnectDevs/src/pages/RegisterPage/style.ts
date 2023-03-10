import styled from 'styled-components'

export const StyledRegisterPage = styled.main`
    background: ${({ theme }) => theme.colors.gray100};
    display: flex;
    align-items: center;
	min-width: 100%;
	min-height: 100vh;
    padding: 68px;
    overflow-x: hidden;

    .pageContainer {
        padding: 0;

        section {
            background-color: ${({ theme }) => theme.colors.gray70};
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 26px;
            width: 100%;
            padding: 67px 33px;

            img {
                width: 100%;
                max-width: 320px;
                margin-bottom: 3px;
            }

            h2, p, a {
                color: ${({ theme }) => theme.colors.white};
            }

            form {
                display: flex;
                flex-direction: column;
                gap: 25px;
                width: 100%;
            }

            a {
                font-family: 'Nunito', sans-serif;
                font-size: 0.875rem;
                font-weight: 400;
                text-align: center;
            	transition: 0.5s;
                line-height: 1.6;

                :hover {
                    color: ${({ theme }) => theme.colors.secondary};
                }
            }
        }
    }
`
