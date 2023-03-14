import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		border: none;
		list-style: none;
		text-decoration: none;
	}

	body {
		background-color: ${({ theme }) => theme.colors.gray100};
	}

	p {
		color: ${({ theme }) => theme.colors.white}
	}

	.user__main {
		display: flex;
    	margin-top: 120px;
    	flex-direction: row;
    	justify-content: space-between;

	.user__box {
		display: flex;
    	flex-direction: row;
		gap: 94px;

		@media (max-width: 768px) {
			flex-direction: column;
		}
		.user__cont {
			display: flex;
    		flex-direction: column;
    		gap: 94px;

		}
	}
	}

	button {
		cursor: pointer;
	}

	dialog {
		display: unset;
		position: unset;
	}

	::-webkit-scrollbar {
        width: 0.75rem;
    }

    ::-webkit-scrollbar-thumb {
        background: #8984E0;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #7C92CC;
    }

    ::-webkit-scrollbar-track {
        background: #212529;
    }

    ::-webkit-scrollbar-track:hover {
        background: #343A40;
    }

	.user__prof {
		cursor: pointer;
      width: 40px;
      height: 40px;
      background-color: ${({ theme }) => theme.colors.secondary};
      border: 3px solid ${({ theme }) => theme.colors.primary};
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
    }

	a {
  		color: inherit;
  		text-decoration: none;
	}

`;
