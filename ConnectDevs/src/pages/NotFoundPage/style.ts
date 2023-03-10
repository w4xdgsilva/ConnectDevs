import styled from 'styled-components'

export const StyledNotFoundPage = styled.main`
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
            gap: 20px;
            width: 100%;
            padding: 16px;

            img {
                width: 100%;
                border-radius: 12px;
            }
        }
    }

    .titleContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;
        text-align: center;

        h1 {
            color: ${({theme}) => theme.colors.feedback.negative};
        }
    
        h2 {
            color: ${({theme}) => theme.colors.gray0};
            line-height: 24px;
        }
    }

`
