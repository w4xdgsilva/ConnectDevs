import styled from 'styled-components'

export const StyledRegisterPage = styled.main`
    background: ${({theme}) => theme.colors.gray100};
    display: flex;
    align-items: center;
	min-width: 100vw;
	min-height: 100vh;

    .pageContainer {
        padding: 0;

        section {
            background-color: ${({theme}) => theme.colors.gray70};
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
`
