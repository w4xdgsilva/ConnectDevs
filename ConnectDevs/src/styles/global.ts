import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		border: none;
		list-style: none;
		text-decoration: none;
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
`
